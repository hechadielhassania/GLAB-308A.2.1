class Character {
    constructor(name, health) {
      this.name = name;
      this.health = health;
    }
  
    attack(target) {
      console.log(`${this.name} attacks ${target.name}!`);
      // Logic for attacking
    }
  
    takeDamage(damage) {
      console.log(`${this.name} takes ${damage} damage!`);
      this.health -= damage;
      if (this.health <= 0) {
        console.log(`${this.name} has been defeated!`);
      }
    }
  }
  
  class Adventurer extends Character {
    constructor(name, health, role) {
      super(name, health);
      this.role = role;
    }
  
    scout() {
      console.log(`${this.name} is scouting.`);
      // Logic for scouting goes here
    }
  
    // Other adventurer-specific methods can be added here
  }
  
  class Companion extends Character {
    constructor(name, health, description) {
      super(name, health);
      this.description = description;
    }
  
    // Companion-specific methods can be added here
  }
  
  class Dragon extends Character {
    constructor(name, health, breathType) {
      super(name, health);
      this.breathType = breathType;
    }
  
    // Dragon-specific methods can be added here
  }
  
  class Orc extends Character {
    constructor(name, health, weapon) {
      super(name, health);
      this.weapon = weapon;
    }
  
    // Orc-specific methods can be added here
  }
  
  class Inventory {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
      console.log(`Added ${item.name} to the inventory.`);
    }
  
    // Other inventory methods can be added here
  }
  
  // Example usage:
  const adventurer1 = new Adventurer("Alice", 100, "Warrior");
  const adventurer2 = new Adventurer("Bob", 100, "Mage");
  const companion1 = new Companion("Charlie", 50, "A loyal dog");
  const dragon1 = new Dragon("Smaug", 200, "Fire");
  const orc1 = new Orc("Grom", 150, "Axe");
  
  adventurer1.attack(orc1);
  orc1.takeDamage(20);
  