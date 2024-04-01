class Character {
    static MAX_HEALTH = 100;
  
    constructor(name) {
      this.name = name;
      this.health = Character.MAX_HEALTH;
      this.inventory = [];
    }
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
  
  class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];
  
    constructor(name, role) {
      super(name);
      // Ensure the given role matches one of the predefined roles
      if (!Adventurer.ROLES.includes(role)) {
        throw new Error(`Invalid role: ${role}`);
      }
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  
    rest() {
      console.log(`${this.name} is taking a rest...`);
      this.health += 10;
      if (this.health > Character.MAX_HEALTH) {
        this.health = Character.MAX_HEALTH;
      }
    }
  }
  
  // Define the Companion class
  class Companion extends Character {
    constructor(name, type, belongings) {
      super(name);
      this.type = type;
      this.inventory = belongings;
    }
  
    fetch(item) {
      console.log(`${this.name} fetched ${item}.`);
      this.inventory.push(item);
    }
  }
  
  // Create instances using Adventurer and Companion classes
  const robin = new Adventurer("Robin", "Fighter");
  const leo = new Companion("Leo", "Cat", []);
  const frank = new Companion("Frank", "Flea", ["small hat", "sunglasses"]);
  leo.companion = frank;
  robin.companion = leo;
  
  // Test new methods for Adventurer and Companion
  robin.scout();
  robin.rest();
  leo.fetch("bone");
  