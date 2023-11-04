{
  // interface
  type user1 = {
    name: string;
    age: number
  }


  interface user2 {
    name: string;
    age: number;
  }
  const userWithRole1 = user1 & {
    role: number,
  }
  type rolenuber = number;
  const user1: user1 = {
    name: 'shakier',
    age: 200,
  }

  //
}