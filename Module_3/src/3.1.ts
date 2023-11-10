{//
  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    constructor(public name: string, public species: string, public sound: string) {
      // this.name = name;
      // this.species = species;
      // this.sound = sound;
    }
    makeSound() {
      console.log(`${this.name} + ${this.sound}`)
    }
  }


  const dog = new Animal('bull', 'harami', 'mew');
  const cat = new Animal('bilai', 'cats', 'me')

  cat.makeSound()
  //
}