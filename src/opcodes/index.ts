import { EVM, Operand } from '../evm';
import { Opcode } from '../opcode';
import { toHex } from '../hex';

import STOP from './stop';
import { Add, Mul, Sub, Div } from '../inst/math';
import { Shl, Shr, Sar } from '../inst/logic';
import { Mod } from './mod';
import EXP from './exp';
import LT from './lt';
import GT from './gt';
import EQ from './eq';
import ISZERO from './iszero';
import AND from './and';
import OR from './or';
import { Not } from './not';
import BYTE from './byte';
import SHA3 from './sha3';
import { ADDRESS } from './address';
import { BALANCE } from './balance';
import ORIGIN from './origin';
import CALLER from './caller';
import CALLVALUE from './callvalue';
import { CALLDATALOAD } from './calldataload';
import { CALLDATASIZE } from './calldatasize';
import { CALLDATACOPY } from './calldatacopy';
import CODESIZE from './codesize';
import CODECOPY from './codecopy';
import GASPRICE from './gasprice';
import EXTCODESIZE from './extcodesize';
import EXTCODECOPY from './extcodecopy';
import RETURNDATASIZE from './returndatasize';
import RETURNDATACOPY from './returndatacopy';
import EXTCODEHASH from './extcodehash';
import { BLOCKHASH } from './blockhash';
import COINBASE from './coinbase';
import TIMESTAMP from './timestamp';
import { NUMBER } from './number';
import { DIFFICULTY } from './difficulty';
import GASLIMIT from './gaslimit';
import { MLOAD } from './mload';
import { MSTORE } from './mstore';
import SLOAD from './sload';
import SSTORE from './sstore';
import JUMP from './jump';
import JUMPI from './jumpi';
import MSIZE from './msize';
import GAS from './gas';
import LOG from './log';
import CREATE from './create';
import CALL from './call';
import CALLCODE from './callcode';
import { Return } from './return';
import DELEGATECALL from './delegatecall';
import CREATE2 from './create2';
import STATICCALL from './staticcall';
import { Revert } from './revert';
import INVALID from './invalid';
import SELFDESTRUCT from './selfdestruct';
import { XOR } from './xor';

export default {
    // Stop and Arithmetic Operations (since Frontier)
    STOP,
    ADD: (_opcode: Opcode, { stack }: EVM) => {
        const left = stack.pop();
        const right = stack.pop();
        stack.push(
            isBigInt(left) && isBigInt(right)
                ? left + right
                : isBigInt(left) && left === 0n
                ? right
                : isBigInt(right) && right === 0n
                ? left
                : new Add(left, right)
        );
    },
    MUL: (_opcode: Opcode, { stack }: EVM) => {
        const left = stack.pop();
        const right = stack.pop();
        stack.push(
            isBigInt(left) && isBigInt(right)
                ? left * right
                : (isBigInt(left) && left === 0n) || (isBigInt(right) && right === 0n)
                ? 0n
                : new Mul(left, right)
        );
    },
    SUB: (_opcode: Opcode, { stack }: EVM) => {
        const left = stack.pop();
        const right = stack.pop();
        stack.push(isBigInt(left) && isBigInt(right) ? left - right : new Sub(left, right));
    },
    DIV: div,
    SDIV: div,
    MOD: mod,
    SMOD: mod,
    ADDMOD: (_opcode: Opcode, { stack }: EVM) => {
        const left = stack.pop();
        const right = stack.pop();
        const mod = stack.pop();
        stack.push(
            isBigInt(left) && isBigInt(right) && isBigInt(mod)
                ? (left + right) % mod
                : isBigInt(left) && isBigInt(right)
                ? new Mod(left + right, mod)
                : new Mod(new Add(left, right), mod)
        );
    },
    MULMOD: (_opcode: Opcode, { stack }: EVM) => {
        const left = stack.pop();
        const right = stack.pop();
        const mod = stack.pop();
        stack.push(
            isBigInt(left) && isBigInt(right) && isBigInt(mod)
                ? (left * right) % mod
                : isBigInt(left) && isBigInt(right)
                ? new Mod(left * right, mod)
                : new Mod(new Mul(left, right), mod)
        );
    },
    EXP,
    SIGNEXTEND: (_opcode: Opcode, { stack }: EVM) => {
        const left = stack.pop();
        const right = stack.pop();
        stack.push(
            isBigInt(left) && isBigInt(right)
                ? (right << (32n - left)) >> (32n - left)
                : isBigInt(left)
                ? new Sar(new Shl(right, 32n - left), 32n - left)
                : new Sar(new Shl(right, new Sub(32n, left)), new Sub(32n, left))
        );
    },

    // Comparison & Bitwise Logic Operations (since Constantinople)
    LT,
    GT,
    SLT: LT,
    SGT: GT,
    EQ,
    ISZERO,
    AND,
    OR,
    XOR: (_opcode: Opcode, { stack }: EVM) => {
        const left = stack.pop();
        const right = stack.pop();
        stack.push(isBigInt(left) && isBigInt(right) ? left ^ right : new XOR(left, right));
    },
    NOT: (_opcode: Opcode, { stack }: EVM) => {
        const value = stack.pop();
        stack.push(isBigInt(value) ? ~value : new Not(value));
    },
    BYTE,
    SHL: (_opcode: Opcode, { stack }: EVM) => {
        const shift = stack.pop();
        const value = stack.pop();
        stack.push(isBigInt(value) && isBigInt(shift) ? value << shift : new Shl(value, shift));
    },
    SHR: (_opcode: Opcode, { stack }: EVM) => {
        const shift = stack.pop();
        const value = stack.pop();
        stack.push(isBigInt(value) && isBigInt(shift) ? value >> shift : new Shr(value, shift));
    },
    SAR: (_opcode: Opcode, { stack }: EVM) => {
        const shift = stack.pop();
        const value = stack.pop();
        stack.push(isBigInt(value) && isBigInt(shift) ? value >> shift : new Sar(value, shift));
    },
    SHA3,
    ADDRESS: (_opcode: Opcode, { stack }: EVM) => {
        stack.push(new ADDRESS());
    },
    BALANCE: (_opcode: Opcode, { stack }: EVM) => {
        const address = stack.pop();
        stack.push(new BALANCE(address));
    },
    ORIGIN,
    CALLER,
    CALLVALUE,
    CALLDATALOAD: (_opcode: Opcode, { stack }: EVM) => {
        const location = stack.pop();
        stack.push(new CALLDATALOAD(location));
    },
    CALLDATASIZE: (_opcode: Opcode, { stack }: EVM) => {
        stack.push(new CALLDATASIZE());
    },
    CALLDATACOPY: (_opcode: Opcode, { stack, memory }: EVM) => {
        const memoryLocation = stack.pop();
        const startLocation = stack.pop();
        const copyLength = stack.pop();
        if (typeof memoryLocation !== 'number') {
            // throw new Error('expected number in returndatacopy');
        }
        memory[memoryLocation as any] = new CALLDATACOPY(startLocation, copyLength);
    },
    CODESIZE,
    CODECOPY,
    GASPRICE,
    EXTCODESIZE,
    EXTCODECOPY,
    RETURNDATASIZE,
    RETURNDATACOPY,
    EXTCODEHASH,
    BLOCKHASH: (_opcode: Opcode, { stack }: EVM) => {
        const blockNumber = stack.pop();
        stack.push(new BLOCKHASH(blockNumber));
    },
    COINBASE,
    TIMESTAMP,
    NUMBER: (_opcode: Opcode, { stack }: EVM) => {
        stack.push(new NUMBER());
    },
    DIFFICULTY: (_opcode: Opcode, { stack }: EVM) => {
        stack.push(new DIFFICULTY());
    },
    GASLIMIT,
    POP: (_opcode: Opcode, { stack }: EVM) => {
        stack.pop();
    },
    MLOAD: (_opcode: Opcode, { stack, memory }: EVM) => {
        const memoryLocation = stack.pop();
        stack.push(
            isBigInt(memoryLocation) && Number(memoryLocation) in memory
                ? memory[Number(memoryLocation)]
                : new MLOAD(memoryLocation)
        );
    },
    MSTORE: mstore,
    MSTORE8: mstore,
    SLOAD,
    SSTORE,
    JUMP,
    JUMPI,
    PC: (opcode: Opcode, { stack }: EVM) => {
        stack.push(BigInt(opcode.pc));
    },
    MSIZE,
    GAS,
    JUMPDEST: (_opcode: Opcode, _state: EVM) => {
        /* Empty */
    },
    PUSH1: push,
    PUSH2: push,
    PUSH3: push,
    PUSH4: push,
    PUSH5: push,
    PUSH6: push,
    PUSH7: push,
    PUSH8: push,
    PUSH9: push,
    PUSH10: push,
    PUSH11: push,
    PUSH12: push,
    PUSH13: push,
    PUSH14: push,
    PUSH15: push,
    PUSH16: push,
    PUSH17: push,
    PUSH18: push,
    PUSH19: push,
    PUSH20: push,
    PUSH21: push,
    PUSH22: push,
    PUSH23: push,
    PUSH24: push,
    PUSH25: push,
    PUSH26: push,
    PUSH27: push,
    PUSH28: push,
    PUSH29: push,
    PUSH30: push,
    PUSH31: push,
    PUSH32: push,
    DUP1: dup(0),
    DUP2: dup(1),
    DUP3: dup(2),
    DUP4: dup(3),
    DUP5: dup(4),
    DUP6: dup(5),
    DUP7: dup(6),
    DUP8: dup(7),
    DUP9: dup(8),
    DUP10: dup(9),
    DUP11: dup(10),
    DUP12: dup(11),
    DUP13: dup(12),
    DUP14: dup(13),
    DUP15: dup(14),
    DUP16: dup(15),
    SWAP1: swap(1),
    SWAP2: swap(2),
    SWAP3: swap(3),
    SWAP4: swap(4),
    SWAP5: swap(5),
    SWAP6: swap(6),
    SWAP7: swap(7),
    SWAP8: swap(8),
    SWAP9: swap(9),
    SWAP10: swap(10),
    SWAP11: swap(11),
    SWAP12: swap(12),
    SWAP13: swap(13),
    SWAP14: swap(14),
    SWAP15: swap(15),
    SWAP16: swap(16),
    LOG0: LOG(0),
    LOG1: LOG(1),
    LOG2: LOG(2),
    LOG3: LOG(3),
    LOG4: LOG(4),
    CREATE,
    CALL,
    CALLCODE,
    RETURN: (_opcode: Opcode, state: EVM) => {
        const memoryStart = state.stack.pop();
        const memoryLength = state.stack.pop();
        state.halted = true;
        if (isBigInt(memoryStart) && isBigInt(memoryLength)) {
            const items = [];
            for (let i = Number(memoryStart); i < Number(memoryStart + memoryLength); i += 32) {
                items.push(i in state.memory ? state.memory[i] : new MLOAD(i));
            }
            state.instructions.push(new Return(items));
        } else {
            state.instructions.push(new Return([], memoryStart, memoryLength));
        }
    },
    DELEGATECALL,
    CREATE2,
    STATICCALL,
    REVERT: (_opcode: Opcode, state: EVM) => {
        const memoryStart = state.stack.pop();
        const memoryLength = state.stack.pop();
        state.halted = true;
        if (isBigInt(memoryStart) && isBigInt(memoryLength)) {
            const items = [];
            for (let i = Number(memoryStart); i < Number(memoryStart + memoryLength); i += 32) {
                items.push(i in state.memory ? state.memory[i] : new MLOAD(i));
            }
            state.instructions.push(new Revert(items));
        } else {
            state.instructions.push(new Revert([], memoryStart, memoryLength));
        }
    },
    INVALID,
    SELFDESTRUCT,
};

function div(_opcode: Opcode, { stack }: EVM) {
    const left = stack.pop();
    const right = stack.pop();
    stack.push(
        isBigInt(left) && isBigInt(right)
            ? left / right
            : isBigInt(right) && right === 1n
            ? left
            : new Div(left, right)
    );
}

function mod(_opcode: Opcode, { stack }: EVM) {
    const left = stack.pop();
    const right = stack.pop();
    stack.push(isBigInt(left) && isBigInt(right) ? left % right : new Mod(left, right));
}

function push(opcode: Opcode, { stack }: EVM) {
    stack.push(BigInt('0x' + toHex(opcode.pushData!)));
}

function dup(position: number) {
    return (_opcode: Opcode, { stack }: EVM): void => {
        stack.dup(position);
    };
}

function swap(position: number) {
    return (_opcode: Opcode, { stack }: EVM): void => {
        stack.swap(position);
    };
}

function mstore(_opcode: Opcode, { stack, memory, instructions }: EVM) {
    const storeLocation = stack.pop();
    const storeData = stack.pop();
    if (isBigInt(storeLocation)) {
        memory[Number(storeLocation)] = storeData;
    } else {
        instructions.push(new MSTORE(storeLocation, storeData));
    }
}

function isBigInt(value: Operand): value is bigint {
    return typeof value === 'bigint';
}
