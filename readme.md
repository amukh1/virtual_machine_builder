[![npm version](https://badge.fury.io/js/virtual_machine_builder.svg)](https://www.npmjs.com/package/virtual_machine_builder)

# virtual_machine_builder

> A small **language* to build virtual machines.

<br>

> Contact me for help, because I *will* respond. Discord: amukh1#9613

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation
<br>

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

<br>

To install and set up the library, run:

```sh
$ npm install virtual_machine_builder
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev virtual_machine_builder
```

<!-- ## There is also a vscode extension:
**[Extension Link](https://marketplace.visualstudio.com/items?itemName=amukh1.ritchie)**

**Or  just search up "virtual_machine_builder" in the extensions section**

![img](./virtual_machine_builder.png) -->

## Usage

virtual_machine_builder has one file extension: `.vm`
<br>
to define a new intruction, write it in the file as follows:

```
instruction:
add, <-- name
0001, <-- opcode
3, <-- number of operands
instruc-end;

instruction:
sub,
0010,
3,
instruc-end;
```
End your instruction with `instruc-end;`
You can have as many instructions as you want in one file.

To add functionality to your intructions, you must make functions for each instruction **(MAKE SURE THE FUNCTION NAMES MATCH THE INSTRUCTION)**, and pass them each into an object. Then when you call the object into the prep() method **(see later)**, include this object.
<br>

```js
function add(operands, vm){
    vm.registers[operands[3]] = vm.registers[operands[1]] + vm.registers[operands[2]]
    // console.log(operands); // [opcode, 1, 2, 3]
    // vm.registers
    // vm.stack
    // vm.ram
}

// Customize the intruction however you want in the javascript file.

module.exports = add;
```

## Example program:
<br>

```
instruction:
add,
0001,
3,
instruc-end;

instruction:
sub,
0010,
3,
instruc-end;

instruction:
ld_immd,
0011,
2,
instruc-end;

instruction:
output,
0100,
1,
instruc-end;
```

See "example" folder for the Javascript implementations.

<!-- <style>
.docs {
    transition: all 0.5s ease;
    position: relative;
    top: 0px;
    background-color:#0f38f0; 
    border-radius:25px; 
    color: white; 
    padding:25px;
    border: none;
}

.docs:Hover {
    top: -10px;
    background-color: #0009a8;
        /* color: white;  */
}

.a {
      text-decoration: none;
    color: white;
    font-size: 2rem;
}

</style> -->

<!-- <button class="docs" href="/handbook/toc/" style="" onClick="()=>{alert('Missed the link?')}">
<a class="a" href="https://ritchie.js.org/docs/">Visit Docs</a>
</button> -->


<br>

## Actually using your new VM:

In another Javascript file (outside the instructions folder), import the library

```js
var VM = require('virtual_machine_builder');
var fs = require('fs'); // file system 
```

Then, create a new virtual machine and run it:

```js
var vm_schematic = fs.readFileSync('./file.vm', 'utf8');
var vm = new VM(schematic, true); // takes in the contents of the .vm file, and a boolean for "console" mode or not.
vm.prep({
    add: add,
    sub: sub,
    ld_immd: ld_immd,
    output: output
}); // prepares the virtual machine for execution and parses vm file

vm.run(`binary_code\n`); // runs the virtual machine with many lines of binary code separated by newlines
vm.runln(`0001 1 2 3`); // adds 1 and 2, and stores the result in register 3 (4th register including 0)
// vm.runln(`binary_code`); // runs the virtual machine with one line of binary code
```

<br>

Passing false into the second argument of the initial VM declaration will make it so the vm doesnt log all the instructions while prepping.

## Contributing

You can contribute to the project by making a pull request on [GitHub](https://github.com/amukh1/virtual_machine_builder).

## Credits

### Amukh1.

## Built With

* [Node](https://nodejs.org/)
* [Javascript](https://www.javascript.com/)
* [Love](https://amukh1.dev)

## Authors

* **Amukh1** - [Github](https://github.com/amukh1)

See also the list of [contributors](https://github.com/amukh1/virtual_machine_builder/contributors) who participated in this project.

## License

[MIT License](https://mit-license.org/2022) © Amukh1 2022