let health = 100;
let attack = 10;
let level = 1;
console.log("Welcome to Shang Wei's Adventure Game!");
console.log("You are an adventurer who's goal is to defeat the demon king.");
console.log(`These are you starting stats:
  Level: ${level}
  Health: ${health}
  Attack: ${attack}`);
function levelUp() {
  level++;
  health += 20;
  attack += 10;
  console.log(`You have leveled up! Your new stats are:
    Level: ${level}
  Health: ${health}
  Attack: ${attack}`);
}
function forest() {
  let choice1 =
    prompt(`Your first step on your journey is into the haunted woods.
  You see a split in the road, one path leads to a dark cave, the other leads to a hut.
  Do you
  1. Enter the cave
  2. Enter the hut
  (Type 1 or 2)`);
  if (choice1 !== "1" && choice1 !== "2") {
    console.log("Invalid choice. Please choose 1 or 2.");
  } else if (choice1 === "1") {
    console.log("You enter the cave");
  } else if (choice1 === "2") {
    console.log("You enter the hut");
  }
  globalThis.choice1 = choice1;
}
function cave() {
  console.log(`You enter the cave and find a goblin!
    The goblin attacks you!
    You lose 10 health.`);
  health -= 10;
  let choice2 = prompt(`Do you
    1. Fight the goblin
    2. Run away
    (Type 1 or 2)`);
  if (choice2 !== "1" && choice2 !== "2") {
    console.log("Invalid choice. Please choose 1 or 2.");
  } else if (choice2 === "1") {
    console.log(`You defeat the goblin!
      You leveled up!`);
    levelUp();
  } else if (choice2 === "2") {
    console.log("You run away safely.");
  }
  globalThis.choice2 = choice2;
  return `Level: ${level}
  Health: ${health}
  Attack: ${attack}`;
}
function hut() {
  let choice3 = prompt(`You enter the hut and find a elf.
    The elf offers you
    1. A potion that will increase your health by 20 points
    2. A potion that increases your attack by 10 points`);
  if (choice3 !== "1" && choice3 !== "2") {
    console.log("Invalid choice. Please choose 1 or 2.");
  } else if (choice3 === "1") {
    health += 20;
  } else if (choice3 === "2") {
    attack += 10;
  }
  globalThis.choice3 = choice3;
  return `Level: ${level}
  Health: ${health}
  Attack: ${attack}`;
}
