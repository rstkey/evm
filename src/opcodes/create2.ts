import Instruction from '../classes/instruction.class';

export default (opcode: any, state: any) => {
    const value = state.stack.pop();
    const memoryStart = state.stack.pop();
    const memoryLength = state.stack.pop();
    const salt = state.stack.pop();
    const instruction = new Instruction(opcode.name, opcode.pc);
    instruction.setDebug();
    instruction.setDescription(
        'stack.push((new Contract(memory[0x%s:0x%s],%s)).value(%s).address);',
        memoryStart,
        memoryLength,
        salt,
        value
    );
    state.stack.push(
        '(new Contract(memory[0x' +
            memoryStart +
            ':0x' +
            memoryLength +
            '],' +
            salt +
            ')).value(' +
            value +
            ').address'
    );
    return instruction;
};
