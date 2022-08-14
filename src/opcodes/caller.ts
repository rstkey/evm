import { EVM } from '../classes/evm.class';
import { Opcode } from '../opcode.interface';

export class CALLER {
    readonly name: string;
    readonly type?: string;
    readonly wrapped: boolean;

    constructor() {
        this.name = 'CALLER';
        this.name = 'address';
        this.wrapped = false;
    }

    toString() {
        return 'msg.sender';
    }
}

export default (_opcode: Opcode, state: EVM): void => {
    state.stack.push(new CALLER());
};
