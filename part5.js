class Adventurer {
    constructor(name, role) {
      this.name = name;
      this.role = role;
    }
  }
  
  class AdventurerFactory {
    constructor(role) {
      this.role = role;
      this.adventurers = [];
    }
  
    generate(name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
      return newAdventurer; // Return the created adventurer for convenience
    }
  
    findByIndex(index) {
      return this.adventurers[index];
    }
  
    findByName(name) {
      return this.adventurers.find((adventurer) => adventurer.name === name);
    }
  
    findAll() {
      return this.adventurers;
    }
  }
  
  // Example usage:
  const healers = new AdventurerFactory("Healer");
  const robin = healers.generate("Robin");
  const john = healers.generate("John");
  
  console.log(healers.findByIndex(0)); // Output: Adventurer { name: 'Robin', role: 'Healer' }
  console.log(healers.findByName("John")); // Output: Adventurer { name: 'John', role: 'Healer' }
  console.log(healers.findAll()); // Output: [ Adventurer { name: 'Robin', role: 'Healer' }, Adventurer { name: 'John', role: 'Healer' } ]
  ``
  