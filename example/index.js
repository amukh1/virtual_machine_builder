var VM = require('../vm.js')
var fs = require('fs')

let vm = new VM(fs.readFileSync(process.argv[2], 'utf8'), true)
vm.prep({
    add: function(operands, vm){
        // console.log(operands)
        vm.registers[operands[3]] = vm.registers[operands[1]] + vm.registers[operands[2]]
        // console.log(vm.registers)
    },
    sub: function(operands, vm){
        vm.registers[operands[3]] = vm.registers[operands[1]] - vm.registers[operands[2]]
    },
    load_immd: function(operands, vm){
        if(parseInt(operands[2],10).toString()===operands[2]){
            vm.registers[operands[1]] = parseInt(operands[2])
        }else {
            vm.registers[operands[1]] = operands[2]
        }
    
    }, 
    
    output: function(operands, vm){
        console.log(vm.registers[operands[1]])
    }
        
})
vm.run(`0011 1 2`)
vm.run(`0011 2 1`)
vm.run(`0010 1 2 3`)
vm.run(`0100 3`)