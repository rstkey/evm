import { EVM } from '../evm';
import { Opcode } from '../opcode';
import stringify from '../utils/stringify';

export class EXTCODEHASH {
    readonly name = 'EXTCODEHASH';
    readonly type?: string;
    readonly wrapped = true;

    constructor(readonly address: any) {}

    toString() {
        return 'keccak256(address(' + stringify(this.address) + ').code)';
    }
}

export default (_opcode: Opcode, { stack }: EVM): void => {
    const address = stack.pop();
    stack.push(new EXTCODEHASH(address));
};
