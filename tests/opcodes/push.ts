import 'mocha';
import { expect } from 'chai';
import Test from '../utils/opcodeTest';
import PUSH from '../../src/opcodes/push';

describe('push.ts', () => {
    it('should push 1 byte item to stack', () => {
        const test = new Test('PUSH1');
        test.setPushData('0x00');
        test.run(PUSH);
        expect(test.getStack()).to.deep.equal(['00']);
    });

    it('should push 16 byte item to stack', () => {
        const test = new Test('PUSH16');
        test.setPushData('0x0123456789abcdef0123456789abcdef');
        test.run(PUSH);
        expect(test.getStack()).to.deep.equal(['0123456789abcdef0123456789abcdef']);
    });

    it('should push 32 byte item to stack', () => {
        const test = new Test('PUSH32');
        test.setPushData('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
        test.run(PUSH);
        expect(test.getStack()).to.deep.equal([
            'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
        ]);
    });
});
