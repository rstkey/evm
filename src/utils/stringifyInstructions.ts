export const stringifyInstructions = (depthInstructions: any, debug = false, indentation = 0) => {
    let instructionLines = '';
    depthInstructions.forEach((instruction: any) => {
        if (
            instruction.jump &&
            instruction.jump.false.filter((i: any) => i.debugLevel > 0).length === 1 &&
            instruction.jump.false.filter((i: any) => i.debugLevel > 0)[0].description ===
                'revert();' &&
            !instruction.jump.condition.includes('msg.sig')
        ) {
            instructionLines +=
                ' '.repeat(indentation) + 'require' + instruction.jump.condition + ';\n';
            instructionLines += stringifyInstructions(instruction.jump.true, debug, indentation);
        } else if (
            instruction.jump &&
            instruction.jump.false.filter((i: any) => i.debugLevel > 0).length === 1 &&
            instruction.jump.false.filter((i: any) => i.debugLevel > 0)[0].jump
        ) {
            instructionLines +=
                ' '.repeat(indentation) + 'if' + instruction.jump.condition + ' {\n';
            instructionLines += stringifyInstructions(
                instruction.jump.true,
                debug,
                indentation + 4
            );
            instructionLines += ' '.repeat(indentation) + '} else ';
            const elseOrElseIf = stringifyInstructions(instruction.jump.false, debug, indentation);
            if (elseOrElseIf.trim().startsWith('if')) {
                instructionLines += elseOrElseIf.trim() + '\n';
            } else {
                instructionLines +=
                    '{\n' +
                    elseOrElseIf
                        .split('\n')
                        .filter(l => l)
                        .map(l => ' '.repeat(4) + l)
                        .join('\n');
                instructionLines += '\n' + ' '.repeat(indentation) + '}\n';
            }
        } else if (instruction.jump) {
            instructionLines +=
                ' '.repeat(indentation) + 'if' + instruction.jump.condition + ' {\n';
            instructionLines += stringifyInstructions(
                instruction.jump.true,
                debug,
                indentation + 4
            );
            instructionLines += ' '.repeat(indentation) + '} else {\n';
            instructionLines += stringifyInstructions(
                instruction.jump.false,
                debug,
                indentation + 4
            );
            instructionLines += ' '.repeat(indentation) + '}\n';
        } else if (debug || instruction.debugLevel > 0) {
            instructionLines += ' '.repeat(indentation) + instruction.description + '\n';
        }
    });
    return instructionLines;
};

export default stringifyInstructions;
