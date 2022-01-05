var person=["AAYUSHI","SHAH"];
var [FNAME,LNAME]=person;
console.log(FNAME);

console.log(LNAME);



function operation(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
 return[add,subtract,multiply,divide];
}
const [add,subtract,multiply,divide]=operation(2,3);
console.log("sum=",add);
