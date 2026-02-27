const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`the player ${name} has ${age} years old, your points of karma are ${karma}`);
console.log(`the player has a total of ${life} lives and ${health} health points`);


rl.question("Damage received: ", (damage) => {health = health - Number(damage);
console.log("The Player " + name + " now have " + health + " health points");

 if (health <= 0) {
  life = life - 1
  console.log(`the player ${name} lost a life, now he has ${life} lives left`);
 } else {
  console.log(`the player ${name} still has ${life} lives left`);
 }

rl.close();

});
