class Adventurer {
    constructor(name, role) {
      this.name = name;
      this.role = role;
      this.health = 100; // Initial health value
    }
  
    scout() {
      console.log(`${this.name} is scouting.`);
      // Logic for scouting goes here
    }
  
    duel(opponent) {
      while (this.health > 0 && opponent.health > 0) {
        const thisRoll = this.roll();
        const opponentRoll = opponent.roll();
        console.log(`${this.name} rolls ${thisRoll}, ${opponent.name} rolls ${opponentRoll}.`);
        if (thisRoll > opponentRoll) {
          opponent.health -= 1;
          console.log(`${this.name} hits ${opponent.name}! ${opponent.name}'s health is now ${opponent.health}.`);
        } else if (thisRoll < opponentRoll) {
          this.health -= 1;
          console.log(`${opponent.name} hits ${this.name}! ${this.name}'s health is now ${this.health}.`);
        } else {
          console.log("It's a tie!");
        }
      }
      if (this.health > 0) {
        console.log(`${this.name} wins the duel with ${this.health} health remaining!`);
      } else if (opponent.health > 0) {
        console.log(`${opponent.name} wins the duel with ${opponent.health} health remaining!`);
      } else {
        console.log("It's a draw!");
      }
    }
  
    roll() {
      // Generate a random number between 1 and 20 as a placeholder
      return Math.floor(Math.random() * 20) + 1;
    }
  }
  
  // Example usage:
  const adventurer1 = new Adventurer("Adventurer 1", "Generic");
  const adventurer2 = new Adventurer("Adventurer 2", "Generic");
  
  adventurer1.duel(adventurer2);
  