#!/usr/bin/env node

const colors = require('colors');
const greet = require("../lib/greet");

console.log("this file runs when executed as globally installed packege");

// print random greeting
console.log(
    // wraps text with rainbow color formatting
    colors.rainbow(
        // returns the random greeting text
        greet.greetRandom()
    )
);