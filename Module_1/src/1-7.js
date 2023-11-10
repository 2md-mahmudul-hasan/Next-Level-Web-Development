"use strict";
// 1-7 Spread and Rest Operator
{
    const array1 = [1, 2, 3];
    const array2 = [3, 4, 5];
    array1.push(...array2);
    const obj1 = {
        a: 'ami',
        b: 'bao',
        c: 'cao'
    };
    const obj2 = {
        d: 'dao',
        e: 'eat',
        f: 'fao'
    };
    const allObj = Object.assign(Object.assign({}, obj1), obj2);
    const greetFriends = (...friends) => {
        console.log(`${friend1} ${friend2}`);
    };
    greetFriends('karim', 'rahim');
}
