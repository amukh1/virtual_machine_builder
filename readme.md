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

then, make a folder and make a file called `{name}.js` and put this code in it:
<br>

```js
function add(operands, vm){
    vm.registers[operands[3]] = vm.registers[operands[1]] + vm.registers[operands[2]]
    // console.log(operands); // [opcode, 1, 2, 3]
    // vm.registers
    // vm.stack
    // vm.ram
}

Customize the intruction however you want in the javascript file.

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
ld-immd,
0011,
2,
instruc-end;

instruction:
output,
0100,
1,
instruc-end;
```

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