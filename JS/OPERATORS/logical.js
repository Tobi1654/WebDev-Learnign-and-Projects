// We use logical operators to make decisions based on multiple conditions.
// There are 4 logical operators which include:
// || (or operator)
// && (and operator)
// !  (not operator)
// ?? (null coalesing)

// These can be applied to values of any type, not just boolean values.
// Expressions are evaluated from left to right.

// Consider the four possible logical combinations that can be made when working with two operands.
// So as long as one is true, then it will return true.
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// An example of the ||, or operator 
let hasReservation = true;
let acceptingWalkIns = false;
const hasAccessToTable = hasReservation || acceptingWalkIns;

console.log('hasAccessToTable', hasAccessToTable);

// &&, the AND operator
// This returns true if all the operands being evaluated are truthy.
// Consider the four possible logical combinations that can be made when working with two operands.
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

let age = 16;
let hasCar = true;
const canDrive = age >= 16 && hasCar;

console.log('canDrive', canDrive);

// Another example
let a = true, b = true, c = true, d = true;

console.log(a && b || c && d);

// Same as...
console.log((a && b) || (c && d));

// !, the NOT operator
// This will return the inverse of the operand.
console.log(!true); // false

// Another example
let isClosedOnSunday = true;

const isRestaurantOpen = !isClosedOnSunday;

console.log(isReservationOpen);

// ??, nullish coalescing operator
// So if a value is null or undefined, then we can supply a default value.

let doesValueExist = null;
const result = doesValueExist ?? false;

// So the ?? operator is syntactic sugar for...
const resultOfExpression = (a !== null && a !== undefined) ? a : false;



// WITHOUT BOOLEAN VALUES
// Expressions are evaluated from left to right.
// When using logical operators with non-boolean values,
// rather than returning the value of true or false,
// it will return the value of the operand.

// so in the case of || (or operator)
console.log(false || 'Steven'); // returns 'Steven'

// So since 'Steven' is evaluated to truthy, it will be the value returned
// the OR operator returns the first truthy value

// The falsy values in JavaScript are...
// undefined, null, 0, false, '', NaN
// anything else that doesn't fall in this category is considered truthy

console.log(false || 1 || 2); // returns 1
// The JavaScript OR operator, ||, performs short-circuit evaluation.
// Meaning it stops the expression once it can evaluate to 'truthy' or 'falsy'.

// Another example
let usersChosenColor = 'blue';
let defaultColor = 'green';

const currentWebsiteColor = usersChosenColor || defaultColor;