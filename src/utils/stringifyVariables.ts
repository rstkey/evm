import { Variable } from '../contract';

export default (variables: { [key: string]: Variable }) => {
    let output = '';

    Object.keys(variables).forEach((key, index) => {
        const variable = variables[key];
        output += stringifyVariable(variable, index);
    });

    if (Object.keys(variables).length > 0) {
        output += '\n';
    }

    return output;
};

export function stringifyVariable(variable: Variable, index: number) {
    let output = '';
    const types = variable.types.filter(type => type !== undefined);
    if (types.length === 0) {
        types.push('unknown');
    }
    if (variable.label) {
        output += [...new Set(types)].join('|') + ' public ' + variable.label + ';';
    } else {
        output += [...new Set(types)].join('|') + ' var' + (index + 1).toString() + ';';
        index++;
    }
    output += '\n';
    return output;
}
