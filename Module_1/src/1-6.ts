//1-6 Function in typescript


//normal function
function add(num1: number, num2: number) {
  return num1 + num2;
}

//arrow function
const addNumber = (num1: number, num2: number): number => num1 + num2;

//function like method

const obj = {
  name: 'murad',
  balance: 0,
  addBalance(balance: number): number {
    return this.balance + balance;
  }
}


const myArray: number[] = [1, 111, 111]

const nearray = myArray.map((item: number): number => item * item)