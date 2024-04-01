class Adventurer {
    constructor(name, health, inventory, companion) {
        this.name = name;
        this.health = health;
        this.inventory = inventory;
        this.companion = companion;
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        return result;
    }
}

class Companion {
    constructor(name, type, belongings) {
        this.name = name;
        this.type = type;
        this.belongings = belongings;
    }
}

const leo = new Companion("Leo", "Cat", ["small hat", "sunglasses"]);
const frank = new Companion("Frank", "Flea", ["tiny hat", "micro sunglasses"]);

const robin = new Adventurer("Robin", 10, ["sword", "potion", "artifact"], leo);
leo.companion = frank;

// Display adventurer information
document.getElementById("adventurerName").textContent = robin.name;
document.getElementById("adventurerHealth").textContent = robin.health;
document.getElementById("adventurerInventory").textContent = robin.inventory.join(", ");
document.getElementById("adventurerCompanion").textContent = `${robin.companion.name} (${robin.companion.type})`;

// Handle rolling
document.getElementById("rollButton").addEventListener("click", function() {
    const rollResult = robin.roll();
    document.getElementById("rollResult").textContent = `${robin.name} rolled a ${rollResult}.`;
});