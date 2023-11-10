// 1-9 Type alias in typescript
{
  const user: {
    name: string;
    age: number;
    address: string;
    list: number;

  } = {
    name: 'murad',
    age: 32,
    address: 'pirkhain',
    list: 3333

  }


  const student: {
    name: string;
    age: number;
    email: string;
  } = {
    name: 'habib',
    age: 32,
    email: 'a@gmail.com'
  }



  type AddNumber = (num1: number, num2: number) => number

  const addNumber: AddNumber = (num1, num2) => num1 + num2;
}