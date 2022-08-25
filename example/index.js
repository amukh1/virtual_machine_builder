var VM = require('../vm.js')
var fs = require('fs')

let vm = new VM(fs.readFileSync(process.argv[2], 'utf8'))
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
    },
    halt: function(operands, vm){
        // vm.halt = true
        process.exit(0)
    },
    jmp: function(operands, vm){
        this.cline = parseInt(operands[1])  - 1
    }
        
})
// vm.runln(`0011 1 2`)
// vm.runln(`0011 2 1`)
// vm.runln(`0010 1 2 3`)
// vm.runln(`0100 3`)
vm.evaulate(`0011 1 2 3
0011 2 1
0010 1 2 3
0100 3
1001 4
1111
`)