// SPDX-License-Identifier: UNLICENSED
// Metadata bzzr0://deb4c2ccab3c2fdca32ab3f46728389c2fe2c165d5fafa07661e4e004f6c344a
pragma solidity ;

contract Contract {

    event Deposit(address indexed _arg0, uint256 _arg1);
    event Approval(address indexed _arg0, address indexed _arg1, uint256 _arg2);
    event Transfer(address indexed _arg0, address indexed _arg1, uint256 _arg2);
    event Withdrawal(address indexed _arg0, uint256 _arg1);

    mapping (address => unknown) public balanceOf;
    mapping (address => mapping (address => uint256)) public allowance;

    unknown var1__1; // Slot #0
    unknown public decimals; // Slot #2
    unknown var3__3; // Slot #1

    function() external payable {
        if (~(msg.data.length < 0x4)) {
            if (msg.sig == 06fdde03) {
                $06fdde03();
            } else {
                if (msg.sig == 095ea7b3) {
                    $095ea7b3();
                } else {
                    if (msg.sig == 18160ddd) {
                        $18160ddd();
                    } else {
                        if (msg.sig == 23b872dd) {
                            $23b872dd();
                        } else {
                            if (msg.sig == 2e1a7d4d) {
                                $2e1a7d4d();
                            } else {
                                if (msg.sig == 313ce567) {
                                    $313ce567();
                                } else {
                                    if (msg.sig == 70a08231) {
                                        $70a08231();
                                    } else {
                                        if (msg.sig == 95d89b41) {
                                            $95d89b41();
                                        } else {
                                            if (msg.sig == a9059cbb) {
                                                $a9059cbb();
                                            } else {
                                                if (msg.sig == d0e30db0) {
                                                    $d0e30db0();
                                                } else {
                                                    if (msg.sig == dd62ed3e) {
                                                        $dd62ed3e();
                                                    } else {
                                                        storage[keccak256(msg.sender, 0x3)] += msg.value;
                                                        emit Deposit(msg.sender, msg.value);
                                                        return;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        storage[keccak256(msg.sender, 0x3)] += msg.value;
        emit Deposit(msg.sender, msg.value);
        return;
    }

    function name() public {
        require(msg.value == 0);
        if (~((0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) == 0) {
            if (~(0x1f < (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2)) {
                if (~(0x0 >= (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2)) {
                    if (~(0x20 >= (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2)) {
                        if (~(0x40 >= (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2)) {
                            if (~(0x60 >= (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2)) {
                                if (~(0x80 >= (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2)) {
                                    if (~(0xa0 >= (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2)) {
                                        if (~(0xc0 >= (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2)) {
                                            if (~(0xe0 >= (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2)) {
                                                if (~(0x100 >= (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2)) {
                                                    if (~(0x120 >= (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2)) {
                                                        if (~(0x140 >= (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2)) {
                                                        }
                                                        if (~(0x1f & (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) == 0) {
                                                            return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20+0x20 + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20 - (0x1f & (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20)];
                                                        }
                                                        return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20+(0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20 - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20)];
                                                    }
                                                    if (~(0x1f & (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) == 0) {
                                                        return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20+0x20 + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20 - (0x1f & (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20)];
                                                    }
                                                    return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20+(0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20 - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20)];
                                                }
                                                if (~(0x1f & (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) == 0) {
                                                    return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20+0x20 + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20 - (0x1f & (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20)];
                                                }
                                                return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20+(0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20 - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20)];
                                            }
                                            if (~(0x1f & (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) == 0) {
                                                return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20+0x20 + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20 - (0x1f & (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20)];
                                            }
                                            return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20+(0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20 - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20)];
                                        }
                                        if (~(0x1f & (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) == 0) {
                                            return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20+0x20 + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20 - (0x1f & (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20)];
                                        }
                                        return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20+(0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20 - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20)];
                                    }
                                    if (~(0x1f & (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) == 0) {
                                        return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20+0x20 + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20 - (0x1f & (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) / 0x20 * 0x20)];
                                    }
                                }
                                if (~(0x1f & (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) == 0) {
                                }
                            }
                            if (~(0x1f & (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) == 0) {
                            }
                        }
                        if (~(0x1f & (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) == 0) {
                        }
                    }
                    if (~(0x1f & (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) == 0) {
                    }
                }
                if (~(0x1f & (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2) == 0) {
                }
            }
            if (~(0x80 + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 > 0xa0)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 > 0xc0)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 > 0xe0)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 > 0x100)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 > 0x120)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 > 0x140)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 > 0x160)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 > 0x180)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 > 0x1a0)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 > 0x1c0)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_1) == 0 - 0x1 & var_1) / 0x2 > 0x1e0)) {
            }
        }
    }

    function approve(address _arg0, uint256 _arg1) public returns (uint256) {
        require(msg.value == 0);
        allowance[msg.sender][_arg0] = _arg1;
        emit Approval(msg.sender, _arg0, _arg1);
        return 0x1;
    }

    function totalSupply() public returns (uint256) {
        require(msg.value == 0);
        return address(this).balance;
    }

    function transferFrom(address _arg0, address _arg1, uint256 _arg2) public returns (uint256) {
        require(msg.value == 0);
        require(balanceOf[_arg0] >= _arg2);
        if (~(_arg0 == msg.sender)) {
            if (~(allowance[_arg0][msg.sender] == 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)) {
                require(allowance[_arg0][msg.sender] >= _arg2);
                storage[keccak256(msg.sender, keccak256(_arg0, 0x4))] -= _arg2;
                storage[keccak256(_arg0, 0x3)] -= _arg2;
                storage[keccak256(_arg1, 0x3)] += _arg2;
                emit Transfer(_arg0, _arg1, _arg2);
                return 0x1;
            }
            storage[keccak256(_arg0, 0x3)] -= _arg2;
            storage[keccak256(_arg1, 0x3)] += _arg2;
            emit Transfer(_arg0, _arg1, _arg2);
            return 0x1;
        }
        if (~(_arg0 == msg.sender)) {
            require(allowance[_arg0][msg.sender] >= _arg2);
            storage[keccak256(msg.sender, keccak256(_arg0, 0x4))] -= _arg2;
            storage[keccak256(_arg0, 0x3)] -= _arg2;
            storage[keccak256(_arg1, 0x3)] += _arg2;
            emit Transfer(_arg0, _arg1, _arg2);
            return 0x1;
        }
        storage[keccak256(_arg0, 0x3)] -= _arg2;
        storage[keccak256(_arg1, 0x3)] += _arg2;
        emit Transfer(_arg0, _arg1, _arg2);
        return 0x1;
    }

    function withdraw(uint256 _arg0) public {
        require(msg.value == 0);
        require(balanceOf[msg.sender] >= _arg0);
        storage[keccak256(msg.sender, 0x3)] -= _arg0;
        require(call(local2 == 0 * 0x8fc,0xffffffffffffffffffffffffffffffffffffffff & msg.sender,local2,local9,memory[0x40] - local9,local9,0x0));
        emit Withdrawal(msg.sender, _arg0);
        return;
    }

    function decimals() public returns (unknown) {
        require(msg.value == 0);
        return decimals;
    }

    function balanceOf(address _arg0) public returns (unknown) {
        require(msg.value == 0);
        return balanceOf[_arg0];
    }

    function symbol() public {
        require(msg.value == 0);
        if (~((0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) == 0) {
            if (~(0x1f < (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2)) {
                if (~(0x0 >= (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2)) {
                    if (~(0x20 >= (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2)) {
                        if (~(0x40 >= (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2)) {
                            if (~(0x60 >= (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2)) {
                                if (~(0x80 >= (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2)) {
                                    if (~(0xa0 >= (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2)) {
                                        if (~(0xc0 >= (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2)) {
                                            if (~(0xe0 >= (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2)) {
                                                if (~(0x100 >= (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2)) {
                                                    if (~(0x120 >= (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2)) {
                                                        if (~(0x140 >= (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2)) {
                                                        }
                                                        if (~(0x1f & (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) == 0) {
                                                            return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20+0x20 + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20 - (0x1f & (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20)];
                                                        }
                                                        return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20+(0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20 - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20)];
                                                    }
                                                    if (~(0x1f & (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) == 0) {
                                                        return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20+0x20 + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20 - (0x1f & (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20)];
                                                    }
                                                    return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20+(0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20 - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20)];
                                                }
                                                if (~(0x1f & (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) == 0) {
                                                    return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20+0x20 + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20 - (0x1f & (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20)];
                                                }
                                                return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20+(0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20 - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20)];
                                            }
                                            if (~(0x1f & (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) == 0) {
                                                return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20+0x20 + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20 - (0x1f & (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20)];
                                            }
                                            return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20+(0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20 - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20)];
                                        }
                                        if (~(0x1f & (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) == 0) {
                                            return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20+0x20 + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20 - (0x1f & (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20)];
                                        }
                                        return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20+(0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20 - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20)];
                                    }
                                    if (~(0x1f & (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) == 0) {
                                        return memory[0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20:(0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20+0x20 + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 + 0x20 + 0x20 + 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20 - (0x1f & (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) - 0x60 + 0x20 + (0x1f + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) / 0x20 * 0x20)];
                                    }
                                }
                                if (~(0x1f & (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) == 0) {
                                }
                            }
                            if (~(0x1f & (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) == 0) {
                            }
                        }
                        if (~(0x1f & (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) == 0) {
                        }
                    }
                    if (~(0x1f & (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) == 0) {
                    }
                }
                if (~(0x1f & (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2) == 0) {
                }
            }
            if (~(0x80 + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 > 0xa0)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 > 0xc0)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 > 0xe0)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 > 0x100)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 > 0x120)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 > 0x140)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 > 0x160)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 > 0x180)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 > 0x1a0)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 > 0x1c0)) {
            }
            if (~(0x80 + (0x100 * (0x1 & var_3) == 0 - 0x1 & var_3) / 0x2 > 0x1e0)) {
            }
        }
    }

    function transfer(address _arg0, uint256 _arg1) public returns (uint256) {
        require(msg.value == 0);
        require(balanceOf[msg.sender] >= _arg1);
        if (~(msg.sender == msg.sender)) {
            if (~(allowance[msg.sender][msg.sender] == 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)) {
                require(allowance[msg.sender][msg.sender] >= _arg1);
                storage[keccak256(msg.sender, keccak256(msg.sender, 0x4))] -= _arg1;
                storage[keccak256(msg.sender, 0x3)] -= _arg1;
                storage[keccak256(_arg0, 0x3)] += _arg1;
                emit Transfer(msg.sender, _arg0, _arg1);
                return 0x1;
            }
            storage[keccak256(msg.sender, 0x3)] -= _arg1;
            storage[keccak256(_arg0, 0x3)] += _arg1;
            emit Transfer(msg.sender, _arg0, _arg1);
            return 0x1;
        }
        if (~(msg.sender == msg.sender)) {
            require(allowance[msg.sender][msg.sender] >= _arg1);
            storage[keccak256(msg.sender, keccak256(msg.sender, 0x4))] -= _arg1;
            storage[keccak256(msg.sender, 0x3)] -= _arg1;
            storage[keccak256(_arg0, 0x3)] += _arg1;
            emit Transfer(msg.sender, _arg0, _arg1);
            return 0x1;
        }
        storage[keccak256(msg.sender, 0x3)] -= _arg1;
        storage[keccak256(_arg0, 0x3)] += _arg1;
        emit Transfer(msg.sender, _arg0, _arg1);
        return 0x1;
    }

    function deposit() public payable {
        storage[keccak256(msg.sender, 0x3)] += msg.value;
        emit Deposit(msg.sender, msg.value);
        return;
    }

    function allowance(address _arg0, address _arg1) public returns (unknown) {
        require(msg.value == 0);
        return allowance[_arg0][_arg1];
    }

}
