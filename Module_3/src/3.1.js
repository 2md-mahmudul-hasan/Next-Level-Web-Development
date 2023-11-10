"use strict";
{ //
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`${this.name} + ${this.sound}`);
        }
    }
    const dog = new Animal('bull', 'harami', 'mew');
    const cat = new Animal('bilai', 'cats', 'me');
    cat.makeSound();
    //
}
