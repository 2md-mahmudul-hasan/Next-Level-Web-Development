"use strict";
// 1-8 Destructuring in typescript
{
    const iAm = {
        name: 'murad',
        address: {
            village: 67,
            thana: 'anowara'
        }
    };
    const { name, address: { village } } = iAm;
    const myArray = ['a', 'b', 'c', 9,];
    const [, , my, ...rest] = myArray;
}
