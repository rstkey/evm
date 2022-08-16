import { EVM } from '../evm';
import { Opcode } from '../opcode';
export declare class TopLevelFunction {
    readonly name: string;
    readonly type?: string;
    readonly label: string;
    readonly hash: any;
    readonly gasUsed: number;
    readonly payable: boolean;
    readonly visibility: string;
    readonly constant: boolean;
    readonly items: any;
    readonly returns: any;
    constructor(items: any, hash: any, gasUsed: number, functionHashes: {
        [s: string]: string;
    });
}
export declare class Variable {
    readonly name: string;
    readonly label: string | false;
    readonly types: any;
    constructor(label: string | false, types: any);
}
export declare class REQUIRE {
    readonly condition: any;
    readonly name = "REQUIRE";
    readonly type?: string;
    readonly wrapped: boolean;
    constructor(condition: any);
    toString(): string;
}
export declare class JUMPI {
    readonly condition: any;
    readonly location: any;
    readonly name = "JUMPI";
    readonly type?: string;
    readonly wrapped = true;
    readonly valid: boolean;
    readonly true?: any;
    readonly false?: any;
    readonly payable?: boolean;
    constructor(condition: any, location: any, ifTrue?: any, ifFalse?: any, skipped?: boolean);
    toString(): any;
}
declare const _default: (opcode: Opcode, state: EVM) => void;
export default _default;
