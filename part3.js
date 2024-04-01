class Adventurer extends Character {
    constructor(name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    // Adventurers have the ability to scout ahead of them.
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  
    // Additional method for adventurers
    rest() {
      console.log(`${this.name} is taking a rest...`);
      this.health += 10; // Resting increases health by 10 points
    }
  }
  
  // Define the Companion class
  class Companion extends Character {
    constructor(name, type, belongings) {
      super(name);
      this.type = type;
      this.inventory = belongings;
    }
  
    // Additional method for companions
    fetch(item) {
      console.log(`${this.name} fetched ${item}.`);
      this.inventory.push(item);
    }
  }
  
  // Create instances using Adventurer and Companion classes
  const robin = new Adventurer("Robin", "Ranger");
  const leo = new Companion("Leo", "Cat", []);
  const frank = new Companion("Frank", "Flea", ["small hat", "sunglasses"]);
  leo.companion = frank;
  robin.companion = leo;
  
  // Test new methods for Adventurer and Companion
  robin.scout();
  robin.rest();
  leo.fetch("bone");
  