"use strict";
//1-6 Function in typescript
//normal function
function add(num1, num2) {
    return num1 + num2;
}
//arrow function
const addNumber = (num1, num2) => num1 + num2;
//function like method
const obj = {
    name: 'murad',
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    }
};
const myArray = [1, 111, 111];
const nearray = myArray.map((item) => item * item);
