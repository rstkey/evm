const fs = require("fs");
const Web3 = require('web3');

const knownFunctionHashes = [
    'allowance(address,address)',
    'approve(address)',
    'approve(address,uint256)',
    'authority()',
    'balanceOf(address)',
    'bid(uint256)',
    'burn(address,uint256)',
    'buyTickets(address)',
    'canCall(address,address,bytes4)',
    'cancelAuction(uint256)',
    'cancelAuctionWhenPaused(uint256)',
    'ceoAddress()',
    'cfoAddress()',
    'cooAddress()',
    'createAuction(uint256,uint256,uint256,uint256,address)',
    'creator()',
    'decimals()',
    'disableICO()',
    'donate()',
    'enableICO()',
    'getAuction(uint256)',
    'getCurrentPrice(uint256)',
    'getMetadata(uint256,string)',
    'ICO()',
    'isGeneScience()',
    'mint(address,uint256)',
    'mint(uint256)',
    'mixGenes(uint256,uint256,uint256)',
    'move(address,address,uint256)',
    'name()',
    'NewQuestion(string,bytes32)',
    'nonFungibleContract()',
    'owner()',
    'ownerCut()',
    'ownerOf(uint256)',
    'pause()',
    'paused()',
    'pull(address,uint256)',
    'push(address,uint256)',
    'question()',
    'setAuthority(address)',
    'setCEO(address)',
    'setCFO(address)',
    'setCOO(address)',
    'setName(bytes32)',
    'setOwner(address)',
    'start()',
    'start_game(string,string)',
    'stop()',
    'StopGame()',
    'stopped()',
    'supportsInterface(bytes4)',
    'symbol()',
    'totalSupply()',
    'transfer(address,uint256)',
    'transferFrom(address,address,uint256)',
    'transferOwnership(address)',
    'Try(string)',
    'unpause()',
    'withdraw()',
    'withdrawBalance()'
];

if(fs.existsSync("./node_modules/ethereumjs-vm/dist/opcodes.js")) {
    const opcodesFile = fs.readFileSync("./node_modules/ethereumjs-vm/dist/opcodes.js","utf8");
    fs.writeFileSync("./utils/opcodes.js",opcodesFile);
    const hashes = {};
    knownFunctionHashes.forEach(name => {
        hashes[Web3.utils.sha3(name).substring(2,10)] = name;
    });
    fs.writeFileSync("./utils/functionHashes.json",JSON.stringify(hashes,null,4));
    console.log("Build successful!");
} else {
    throw new Error("Could not find opcodes.js in node_modules/ethereum-js-vm/dist, please make sure all dev dependencies are installed");
}