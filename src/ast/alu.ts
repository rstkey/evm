import { type Expr, Tag, Val } from './index';

abstract class Bin extends Tag {
    constructor(readonly left: Expr, readonly right: Expr) {
        super();
    }
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
 *
 * > For `BigInt`s, there's no truncation.
 * > Conceptually, understand positive `BigInt`s as having an infinite number of leading 0 bits,
 * > and negative `BigInt`s having an infinite number of leading 1 bits.
 */
const X = 1n << 0x100n;
const mod256 = (n: bigint) => ((n % X) + X) % X;

export class Add extends Bin {
    readonly tag = 'Add';
    eval(): Expr {
        const left = this.left.eval();
        const right = this.right.eval();
        return left.isVal() && right.isVal()
            ? new Val(mod256(left.val + right.val))
            : left.isZero()
                ? right
                : right.isZero()
                    ? left
                    : new Add(left, right);
    }
}

export class Mul extends Bin {
    readonly tag = 'Mul';
    eval(): Expr {
        const lhs = this.left.eval();
        const rhs = this.right.eval();
        return lhs.isVal() && rhs.isVal()
            ? new Val(lhs.val * rhs.val)
            : lhs.isZero() || rhs.isZero()
                ? new Val(0n)
                : new Mul(lhs, rhs);
    }
}

export class Sub extends Bin {
    readonly tag = 'Sub';
    eval(): Expr {
        const left = this.left.eval();
        const right = this.right.eval();
        return left.isVal() && right.isVal()
            ? new Val(mod256(left.val - right.val))
            : right.isZero()
                ? left
                : new Sub(left, right);
    }
}

export class Div extends Bin {
    readonly tag = 'Div';
    eval(): Expr {
        const left = this.left.eval();
        const right = this.right.eval();
        return left.isVal() && right.isVal()
            ? right.val === 0n
                ? new Div(left, right)
                : new Val(left.val / right.val)
            : right.isVal() && right.val === 1n
                ? left
                : new Div(left, right);
    }
}

export class Mod extends Bin {
    readonly tag = 'Mod';
    eval(): Expr {
        const lhs = this.left.eval();
        const rhs = this.right.eval();
        return lhs.isVal() && rhs.isVal() && rhs.val !== 0n
            ? new Val(lhs.val % rhs.val)
            : new Mod(lhs, rhs);
    }
}

export class Exp extends Bin {
    readonly tag = 'Exp';
    eval(): Expr {
        const left = this.left.eval();
        const right = this.right.eval();
        return left.isVal() && right.isVal() && right.val >= 0
            ? new Val(left.val ** right.val)
            : new Exp(left, right);
    }
}


abstract class Cmp extends Tag {
    constructor(readonly left: Expr, readonly right: Expr, readonly equal: boolean = false) {
        super();
    }
}

abstract class Unary extends Tag {
    constructor(readonly value: Expr) {
        super();
    }
}

abstract class Shift extends Tag {
    constructor(readonly value: Expr, readonly shift: Expr) {
        super();
    }
}

export class Lt extends Cmp {
    readonly tag = 'Lt';
    eval(): Expr {
        const lhs = this.left.eval();
        const rhs = this.right.eval();
        return lhs.isVal() && rhs.isVal() ? new Val(lhs.val < rhs.val ? 1n : 0n) : new Lt(lhs, rhs);
    }
}

export class Gt extends Cmp {
    readonly tag = 'Gt';
    eval(): Expr {
        const lhs = this.left.eval();
        const rhs = this.right.eval();
        return lhs.isVal() && rhs.isVal() ? new Val(lhs.val > rhs.val ? 1n : 0n) : new Gt(lhs, rhs);
    }
}

export class Eq extends Bin {
    readonly tag = 'Eq';
    eval(): Expr {
        return new Eq(this.left.eval(), this.right.eval());
    }
}

export class IsZero extends Tag {
    readonly tag = 'IsZero';
    constructor(readonly value: Expr) {
        super();
    }
    eval(): Expr {
        const val = this.value.eval();
        return val.isVal()
            ? val.val === 0n
                ? new Val(1n)
                : new Val(0n)
            : val.tag === 'Lt'
                ? new Gt(val.left, val.right, !val.equal)
                : val.tag === 'Gt'
                    ? new Lt(val.left, val.right, !val.equal)
                    : val.tag === 'IsZero'
                        ? val.value
                        : new IsZero(val);
    }
}

export class And extends Bin {
    readonly tag = 'And';
    eval(): Expr {
        const lhs = this.left.eval();
        const rhs = this.right.eval();
        return lhs.isVal() && rhs.isVal()
            ? new Val(lhs.val & rhs.val)
            : lhs.isVal() && /^[f]+$/.test(lhs.val.toString(16))
                ? rhs
                : rhs.isVal() && /^[f]+$/.test(rhs.val.toString(16))
                    ? lhs
                    : lhs.isVal() && rhs.tag === 'And' && rhs.left.isVal() && lhs.val === rhs.left.val
                        ? rhs.right
                        : new And(lhs, rhs);
    }
}

export class Or extends Bin {
    readonly tag = 'Or';
    eval(): Expr {
        const lhs = this.left.eval();
        const rhs = this.right.eval();
        return lhs.isVal() && rhs.isVal() ? new Val(lhs.val | rhs.val) : new Or(lhs, rhs);
    }
}

export class Xor extends Bin {
    readonly tag = 'Xor';
    eval(): Expr {
        const lhs = this.left.eval();
        const rhs = this.right.eval();
        return lhs.isVal() && rhs.isVal() ? new Val(lhs.val ^ rhs.val) : new Xor(lhs, rhs);
    }
}

export class Not extends Unary {
    readonly tag = 'Not';
    eval(): Expr {
        const val = this.value.eval();
        return val.isVal() ? new Val(mod256(~val.val)) : new Not(val);
    }
}

export class Byte extends Tag {
    readonly tag = 'Byte';
    constructor(readonly pos: Expr, readonly data: Expr) {
        super();
    }
    eval(): Expr {
        const pos = this.pos.eval();
        const data = this.data.eval();
        return data.isVal() && pos.isVal()
            ? new Val((data.val >> pos.val) & 1n)
            : new Byte(pos, data);
    }
}

export class Shl extends Shift {
    readonly tag = 'Shl';
    eval(): Expr {
        const val = this.value.eval();
        const shift = this.shift.eval();
        return val.isVal() && shift.isVal() ? new Val(val.val << shift.val) : new Shl(val, shift);
    }
}

export class Shr extends Shift {
    readonly tag = 'Shr';
    eval(): Expr {
        const val = this.value.eval();
        const shift = this.shift.eval();
        return val.isVal() && shift.isVal() ? new Val(val.val >> shift.val) : new Shr(val, shift);
    }
}

export class Sar extends Shift {
    readonly tag = 'Sar';
    eval(): Expr {
        const val = this.value.eval();
        const shift = this.shift.eval();
        return val.isVal() && shift.isVal() ? new Val(val.val >> shift.val) : new Sar(val, shift);
    }
}

export class Sig extends Tag {
    readonly tag = 'Sig';
    constructor(readonly selector: string) {
        super();
    }
    eval(): Expr {
        return this;
    }
}