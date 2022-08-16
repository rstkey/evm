import { EVM } from '../evm';
import { Opcode } from '../opcode';
export declare class ORIGIN {
    readonly name = "ORIGIN";
    readonly type?: string;
    readonly wrapped = false;
    toString(): string;
}
declare const _default: (_opcode: Opcode, { stack }: EVM) => void;
export default _default;
