function add(operands, vm){
    // console.log(operands)
    vm.registers[operands[3]] = vm.registers[operands[1]] + vm.registers[operands[2]]
    // console.log(vm.registers)
}

module.exports = add