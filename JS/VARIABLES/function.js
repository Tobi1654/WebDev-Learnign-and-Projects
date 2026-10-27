// Functions are the building blocks of our applications.
// It allows us to group together statements to perform a task or calculate a value.
function sayHi(){
    console.log('Hello!');
}

sayHi();


// Can also define a parameter variable within the parenthesis.
function sayHi2(name){
    console.log('Hello!' + ' ' + name);
}

sayHi2('Tobi')


// TYPES OF FUNCTIONS

// Functions are a building block in our programs.
// They enable us to group together a block of code,
// which is a set of statements defined within curly braces.

// We create a function for one of two options.
// The first option is to perform some action.
// The second option is to calculate and return some value.

// So not all functions require us to explicitly use the return keyword.
// By default if we don't supply an explicit return value,
// then JavaScript will have the function return the value undefined.

function multiply(num1, num2) {
    return num1 * num2;
}

console.log( multiply(2, 2) );

// If we don't specify a return keyword, then JavaScript will return undefined by default.
function add(num1, num2) {
    const sum = num1 + num2;
}

console.log( add(3, 3) );