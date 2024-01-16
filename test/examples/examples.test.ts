import { strict as assert } from 'assert';
import { expect } from 'chai';
import { FunctionFragment } from 'ethers';
import { readFileSync } from 'fs';
import { inspect } from 'util';

import { Contract } from 'sevm';
import 'sevm/4byte';

import { fnselector } from '../utils/selector';

describe('examples', function () {
    [
        {
            name: 'BeaconDeposit-0x00000000219ab540356cBB839Cbe05303d7705Fa',
            members: [
                // TODO when un skip test
                // /^function supportsInterfac\(bytes4 _arg0a\) public payable {$/m,
            ],
            ercs: ['ERC165'] as const,
            skipSnapshot: true,
        }, {
            name: 'Compound-0x3FDA67f7583380E67ef93072294a7fAc882FD7E7',
            members: [],
            skipSnapshot: true,
        }, {
            name: 'Contract-0x60d20e0150F3A9717A7cb50d3F617Ebf6D953467',
            members: [],
            skipSnapshot: true,
        }, {
            name: 'CryptoKitties-0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
            members: [],
            ercs: ['ERC165'] as const,
            skipSnapshot: true,
        }, {
            name: 'DAI-0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
            members: [],
            ercs: ['ERC20'] as const,
            checkEvents: false,
        }, {
            name: 'ENS-0x314159265dD8dbb310642f98f50C066173C1259b',
            members: [],
            selectors: [],
        }, {
            name: 'MSOW-0x07880D44b0f7b75464ad18fc2b980049c40A8bc3',
            members: [],
            ercs: ['ERC721'] as const,
            checkEvents: false,
            skipSnapshot: true,
        }, {
            name: 'SmithBotExecutor-0x000000000000Df8c944e775BDe7Af50300999283',
            members: [],
            selectors: ['00000000', '83197ef0', 'cc066bb8', 'f04f2707'],
            skipSnapshot: true,
        }, {
            name: 'UnicornToken-0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
            members: [
                /event Transfer\(address indexed _arg0, address indexed _arg1, uint256 _arg2\);$/m,
                /event FrozenFunds\(address _arg0, bool _arg1\);$/m,
                /mapping \(address => unknown\) public balanceOf;$/m,
                /mapping \(address => unknown\) public frozenAccount;$/m,
                /mapping \(address => mapping \(address => uint256\)\) public allowance;$/m,
                /mapping \(address => mapping \(address => unknown\)\) public spentAllowance;$/m,
                /unknown public owner;/m,
                /unknown public decimals;/m,
                /unknown public totalSupply;/m,
                /function approve\(address _arg0, uint256 _arg1\) public payable returns \(uint256\) {$/m,
                /function transferFrom\(address _arg0, address _arg1, uint256 _arg2\) public payable returns \(uint256\) {$/m,
                /function mintToken\(address _arg0, uint256 _arg1\) public payable {$/m,
                /function name\(\)/m,
                /function symbol\(\) public payable {$/m,
                /function transfer\(address _arg0, uint256 _arg1\) public payable {$/m,
                /function freezeAccount\(address _arg0, bool _arg1\) public payable {$/m,
                /function transferOwnership\(address _arg0\) public payable {$/m,
            ],
            ercs: ['ERC20'] as const,
            checkEvents: false,
        }, {
            /**
             * Bytecode of USDC _proxy_ contract.
             * Fetched with this RPC provider https://api.avax-test.network/ext/bc/C/rpc.
             *
             * See it on Snowtrace https://testnet.snowtrace.io/address/0x5425890298aed601595a70AB815c96711a31Bc65.
             */
            name: 'USDC-0x5425890298aed601595a70AB815c96711a31Bc65',
            members: [
                /address public implementation;/m,
                /address public admin;/m,
                /function upgradeTo\(address _arg0\) public {$/m,
                /function upgradeToAndCall\(address _arg0, bytes _arg1\) public payable {$/m,
                /function changeAdmin\(address _arg0\) public {$/m,
            ],
        }, {
            name: 'WETH-0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            members: [
                /mapping \(address => unknown\) public balanceOf;$/m,
                /mapping \(address => mapping \(address => uint256\)\) public allowance;$/m,
                /unknown public decimals;/m,
                /function name\(\)/m,
                /function approve\(address _arg0, uint256 _arg1\)/m,
                /function totalSupply\(\)/m,
                /function transferFrom\(address _arg0, address _arg1, uint256 _arg2\)/m,
                /function withdraw\(uint256 _arg0\)/m,
                /function symbol\(\)/m,
                /function transfer\(address _arg0, uint256 _arg1\)/m,
                /function deposit\(\)/m,
            ],
            ercs: ['ERC20'] as const,
        },
    ].forEach(({ name, members, ercs, checkEvents, selectors, skipSnapshot }) => {
        describe(`${name}`, function () {
            const defs = members.map(line =>
                line.source
                    .replace(/\\/g, '')
                    .replace('^', '')
                    .replace('$', '')
                    .replace('{', '')
                    .replace(';', '')
            );
            const functions = defs
                .filter(line => line.startsWith('function '))
                .map(line => FunctionFragment.from(line.trim()).format());
            const variables = defs
                .filter(line => line.includes(' public ') && !line.includes('('))
                .map(line => line.split(' ').pop()! + '()');
            const mappings = defs
                .filter(line => line.startsWith('mapping ') && line.includes(' public '))
                .map(line => {
                    const parts = line
                        .replace(/mapping /g, '')
                        .replace(/\(/g, '')
                        .replace(/\)/g, '')
                        .replace(/ => /g, ' ')
                        .replace(' public ', ' ')
                        .split(' ');
                    const name = parts.pop();
                    parts.pop();
                    return `${name}(${parts.join(',')})`;
                });

            let contract: Contract;
            let text: string;

            before(function () {
                // Increasing due to timeout on Node 16
                // This seems to be an issue on solidify SmithBot, which is around ~4.3M
                this.timeout(10000);

                const bytecode = readFileSync(`./test/examples/${name}.bytecode`, 'utf8');
                contract = new Contract(bytecode).patch();
                text = contract.reduce().patch().solidify();
            });

            it('should match `chunks` coverage snapshot', function () {
                const trunc = (str: unknown, len = 100) =>
                    (`${str}`.length <= len ? `${str}` : `${str}`.slice(0, len) + '[..]');

                const nopcodes = contract.opcodes().length;
                let output = `${nopcodes} opcodes in bytecode\n`;

                let sum = 0;
                for (const chunk of contract.chunks()) {
                    output += `@${chunk.pcbegin}: `;
                    
                    if (chunk.content instanceof Uint8Array) {
                        assert(chunk.states === undefined);
                        output += `unreachable (${chunk.content.length} bytes in buffer) `;
                        output += trunc(Buffer.from(chunk.content).toString('hex'));
                    } else {
                        const block = contract.blocks.get(chunk.pcbegin);
                        assert(chunk.states !== undefined);
                        assert(block !== undefined);
                        assert(block.opcodes.length === chunk.content.length);
                        sum += chunk.content.length;
                        output += `⟪${chunk.content.length}⟫ ${chunk.states.length}〒`;
                    }
                    output += '\n';
                }

                expect(sum).to.be.equal(nopcodes);
                expect(output).to.matchFile(`examples/${name}.dis`, this);
            });

            it('should match Solidity snapshot', function () {
                if (skipSnapshot) this.skip();
                expect(text).to.matchFile(`examples/${name}.sol`, this);
            });

            it('should detect selectors', function () {
                if (selectors === undefined && members.length === 0) this.skip();
                expect([...contract.functionBranches.keys()]).to.have.members(
                    selectors !== undefined
                        ? selectors
                        : [...functions, ...variables, ...mappings].map(fnselector)
                );
            });

            it('should detect functions', function () {
                expect(contract.getFunctions()).to.include.members(functions);
            });

            it('should detect variables', function () {
                expect(contract.getFunctions()).to.include.members(variables);
            });

            it('should detect mappings', function () {
                expect(contract.getFunctions()).to.include.members(mappings);
            });

            it('functions, variables & mappings should cover `getFunctions`', function () {
                if (members.length > 0) {
                    const expected = [...functions, ...variables, ...mappings];
                    expect(new Set(contract.getFunctions()),
                        `actual ${inspect(contract.getFunctions())} != expected ${inspect(expected)}`
                    ).to.be.deep.equal(new Set(expected));
                }
            });

            const trunc = (s: string): string => (s.length < 50 ? s : s.substring(0, 50) + '...');
            members.forEach(member =>
                it(`should match decompiled bytecode to '${trunc(member.source)}'`, function () {
                    expect(text).to.match(member);
                })
            );

            ercs?.forEach(erc =>
                it(`should detect \`${erc}\` interface`, function () {
                    expect(contract.isERC(erc, checkEvents)).to.be.true;
                })
            );
        });
    });
});