import { expect } from 'chai';
import EVM from '../utils/evmtest';
import { compile } from './utils/solc';
import { readFileSync } from 'fs';
import { OPCODES } from '../../src/opcode';

// const CONTRACT = `
// pragma solidity 0.5.5;

// contract A {
//     uint256 hola;
// }

// contract Contract {
//     event HelloWorld(string);

//     function () external {
//         emit HelloWorld("Hello, world!");
//     }
// }
// `;

describe.skip('contracts::helloworld', () => {
    let evm: EVM;

    before(() => {
        const source = readFileSync('./test/contracts/Cryptomeria.sol', 'utf8');
        // evm = new EVM(compile('Contract', CONTRACT));
        evm = new EVM(compile('Cryptomeria', source, '0.8.16'));

        // console.log(evm.getBytecode());
        // evm.getOpcodes().forEach(op => console.log(op.toString()));
    });

    it('should not detect selfdestruct', () => {
        console.log(evm.decompile());
        expect(evm.containsOpcode(OPCODES.SELFDESTRUCT)).to.be.false;
        expect(evm.containsOpcode('SELFDESTRUCT')).to.be.false;
    }).timeout(2000);
});
