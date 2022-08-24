function load_immd(operands, vm){
    if(parseInt(operands[2],10).toString()===operands[2]){
        vm.registers[operands[1]] = parseInt(operands[2])
    }else {
        vm.registers[operands[1]] = operands[2]
    }

    }
    
module.exports = load_immd