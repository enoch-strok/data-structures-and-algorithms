'use strict';

let person = {
    name: "John",
    role: "Instructor",
    hobbies: ['Baseball','Hockey','Music'],
}

//for ... in
for( let potatoe in person) {
    console.log( potatoe, person[potatoe]);
}

// let properties = Object.keys(person);
// properties.forEach(potatoe);
