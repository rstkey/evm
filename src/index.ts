import EVM from './classes/evm.class';

export default (byteCode: any, debug = false) => {
    const evm = new EVM(byteCode);
    return evm.toString(debug);
};
