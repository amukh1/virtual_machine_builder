function sub(operands, vm){
    vm.registers[operands[3]] = vm.registers[operands[1]] - vm.registers[operands[2]]
    }
    
module.exports = sub