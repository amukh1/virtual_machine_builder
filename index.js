var VM = require('./vm.js')
var fs = require('fs')

let vm = new VM(fs.readFileSync(process.argv[2], 'utf8'), true)
vm.prep()
vm.run(`0011 1 2`)
vm.run(`0011 2 1`)
vm.run(`0010 1 2 3`)
vm.run(`0100 3`)