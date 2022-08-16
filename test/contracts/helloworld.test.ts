import { expect } from 'chai';
import EVM from '../utils/evmtest';
import { SELFDESTRUCT } from '../../src/codes';
import Contract from './utils/solc';

const CONTRACT = `
pragma solidity 0.5.5;

contract Contract {
    event HelloWorld(string);

    function () external {
        emit HelloWorld("Hello, world!");
    }
}
`;

describe('contracts::helloworld', () => {
    let contract: Contract;
    let evm: EVM;

    before(() => {
        contract = new Contract();
        contract.load('helloworld', CONTRACT);
        evm = new EVM(contract.bytecode());
    });

    it('should compile without errors', () => {
        expect(contract.valid(), contract.errors().join('\n')).to.be.true;
    });

    it('should not detect selfdestruct', () => {
        expect(evm.containsOpcode(SELFDESTRUCT)).to.be.false;
        expect(evm.containsOpcode('SELFDESTRUCT')).to.be.false;
    });
});
