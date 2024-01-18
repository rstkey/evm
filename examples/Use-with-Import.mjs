#!/usr/bin/env -S NODE_DISABLE_COLORS=1 node
/* eslint-env node */

import { Contract } from 'sevm';

// 00 opcode is STOP https://www.evm.codes/#00?fork=shanghai
const contract = new Contract('0x00');
console.log(contract.solidify());
