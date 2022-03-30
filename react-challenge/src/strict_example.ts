
// Enforce variable type Annotation
const invalidString = 'world'
const validString: string = 'Hello'

// Enforcing Parameter type annotation and return type.
const invalidParam = (param: any): void => param
const invalidParamAny = (param: string) => param

//Correct way of declaring function expression  
const validParam = (param: string): string => param
const invalidMessage = validParam('Hello World')

const validMessage: string = validParam('Hello World')

// console logs to skip other fail messages
console.log(invalidParam);
console.log(invalidParamAny);
console.log(invalidString);

console.log(validString);
console.log(validParam);
console.log(validMessage);
