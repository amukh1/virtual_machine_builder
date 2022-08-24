// const fs = require('fs');

function toString(str) {

    var binString = '';
    
    str.split(' ').map(function(bin) {
        binString += String.fromCharCode(parseInt(bin, 2));
      });
    return binString;
    }

function toBinary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

class VM {
    constructor(schem, console_mode) {
         this.schematic = schem
         this.registers = []
         this.ram = []
         this.stack = []
         this.heap = []
         this.instructions = {}
         this.console_mode = console_mode
    }
    run(bin){
let binary = bin.split('\n')
binary.forEach((line, index)=> {
    // console.log(line)
    // let line = toString(linee)
if(this.instructions[line.split(" ")[0]]){
    this.instructions[line.split(" ")[0]].execute(line.split(" "),this)
}
        })
    }

prep(){
let s = this.schematic.split(";")

// console.log(s)
s.forEach((x, index)=> {
    let ifInstruc = (x.split(":")[0].split("\n").join("").split('\r').join("")) == 'instruction'
    if(ifInstruc == true){
    let body = x.split(":")[1]
    // console.log(body)
    let name = body.split(',')[0].split("\n").join("").split(" ").join("").split("\r").join("")
    // console.log(name + 'eeee')
    let opcode = body.split(',')[1].split("\n").join("").split(" ").join("").split("\r").join("")
    let operands = body.split(',')[2].split("\n").join("")
    this.instructions[opcode]= {
        execute: require('./instructions/'+name+'.js'),
    }
}
        });
if(this.console_mode == true){
        console.log(this.instructions)
}
    }

    runln(line){
        // let line = toString(linee)
        if(this.instructions[line.split(" ")[0]]){
            this.instructions[line.split(" ")[0]].execute(line.split(" "),this)
        }

    }

}

// let y = fs.readFileSync(process.argv[2], 'utf8')
// console.log(y)
// let vm = new VM(y)
// vm.prep()
// vm.runln('0001 1 2 3')
// vm.runln('0010 1 2 3')


/*
example vm:

# VM;

instruction:
add, # name;
1011, # opcode;
3, #operands;
instruc-end;



*/

module.exports = VM;