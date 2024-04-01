class Character {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
  
  class Companion extends Character {
    constructor(name, type, belongings) {
      super(name);
      this.type = type;
      this.inventory = belongings;
    }
  }
  
  // Create Robin and companions
  const robin = new Character("Robin");
  robin.inventory = ["sword", "potion", "artifact"];
  
  const leo = new Companion("Leo", "Cat", []);
  const frank = new Companion("Frank", "Flea", ["small hat", "sunglasses"]);
  leo.companion = frank;
  robin.companion = leo;
  
  // Test roll method for Robin and companions
  robin.roll();
  robin.companion.roll();
  robin.companion.companion.roll();
git   