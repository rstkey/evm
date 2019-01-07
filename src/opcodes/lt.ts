import EVM from '../classes/evm.class';
import Opcode from '../interfaces/opcode.interface';
import Instruction from '../classes/instruction.class';
import * as BigNumber from '../../node_modules/big-integer';
import stringify from '../utils/stringify';

export class LT {
    readonly type: string;
    readonly static: boolean;
    readonly left: any;
    readonly right: any;

    constructor(left: any, right: any) {
        this.type = 'LT';
        this.static = false;
        this.left = left;
        this.right = right;
    }

    toString() {
        return stringify(this.left) + ' < ' + stringify(this.right);
    }
}

export default (opcode: Opcode, state: EVM): Instruction => {
    const left = state.stack.pop();
    const right = state.stack.pop();
    const instruction = new Instruction(opcode.name, opcode.pc);
    if (BigNumber.isInstance(left) && BigNumber.isInstance(right)) {
        state.stack.push(BigNumber(left.lesser(right) === true ? 1 : 0));
    } else {
        state.stack.push(new LT(left, right));
    }
    return instruction;
};
