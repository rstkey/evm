import { ControlFlowGraph, Jump, Jumpi } from '../cfg';
import { EVM } from '../evm';
import { SIG } from '../inst/logic';
import { TopLevelFunction } from '../inst/jumps';
import { Operand } from '../state';
import stringifyFunctions from './stringifyFunctions';

/**
 *
 * @param instructionTree
 * @param indentation
 * @returns
 */
export function stringifyInstructions(instructionTree: any, indentation = 0): string {
    let lines = '';
    instructionTree.forEach((instruction: any) => {
        if (instruction instanceof Jump) return;

        if (instruction.name === 'JUMPI' && instruction.false) {
            const condition = instruction.toString();
            const falseInstructions = instruction.false.filter((i: any) => i.debugLevel > 0);
            if (falseInstructions.length === 1 && falseInstructions[0].name === 'JUMPI') {
                lines += ' '.repeat(indentation) + 'if' + condition + ' {\n';
                lines += stringifyInstructions(instruction.true, indentation + 4);
                lines += ' '.repeat(indentation) + '} else ';
                const elseOrElseIf = stringifyInstructions(instruction.false, indentation);
                if (elseOrElseIf.trim().startsWith('if')) {
                    lines += elseOrElseIf.trim() + '\n';
                } else {
                    lines +=
                        '{\n' +
                        elseOrElseIf
                            .split('\n')
                            .filter(l => l)
                            .map(l => ' '.repeat(4) + l)
                            .join('\n');
                    lines += '\n' + ' '.repeat(indentation) + '}\n';
                }
            } else {
                lines += ' '.repeat(indentation) + 'if' + condition + ' {\n';
                lines += stringifyInstructions(instruction.true, indentation + 4);
                lines += ' '.repeat(indentation) + '} else {\n';
                lines += stringifyInstructions(instruction.false, indentation + 4);
                lines += ' '.repeat(indentation) + '}\n';
            }
        } else {
            lines += ' '.repeat(indentation) + instruction.toString() + '\n';
        }
    });
    return lines;
}

export function stringifyBlocks(
    { blocks, entry }: ControlFlowGraph,
    functionsHashes: EVM['functionHashes']
) {
    const pcs: { [key: string]: true } = {};
    let output = '';
    stringifyBlock(entry, 0);

    function stringifyBlock(key: string, indent: number) {
        if (key in pcs) {
            return;
        }

        pcs[key] = true;

        const block = blocks[key];
        if (!block) {
            console.log(key);
            return;
        }

        output += stringifyInstructions(block.stmts, indent);
        const last = block.stmts.at(-1) as Operand;
        if (last instanceof Jumpi) {
            output += ' '.repeat(indent) + '{\n';
            stringifyBlock(block.exit.pc + ':' + last.pc!, indent + 4);
            output += ' '.repeat(indent) + '} else {\n';
            stringifyBlock(block.exit.pc + ':' + (block.opcodes.at(-1)!.pc + 1), indent + 4);
            output += ' '.repeat(indent) + '}\n';

            if (last.condition instanceof SIG) {
                const tlf = new TopLevelFunction(
                    blocks[block.exit.pc + ':' + last.pc!].stmts,
                    last.condition.hash,
                    {}
                );
                output += stringifyFunctions(last.condition.hash, tlf, functionsHashes);
            }
        } else if (last instanceof Jump) {
            output += ' '.repeat(indent) + '{\n';
            stringifyBlock(block.exit.pc + ':' + last.pc!, indent + 4);
            output += ' '.repeat(indent) + '}\n';
        }
    }

    return output;
}
