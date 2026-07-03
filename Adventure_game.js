const readlineSync = require("readline-sync");
let health;
let level;
function levelUp() {
  level++;
  health += 20;
}
function introduction() {
  health = 100;
  level = 1;
  console.log("Welcome to Shang Wei's Adventure Game!");
  console.log("You are an adventurer who's goal is to defeat the demon king.");
  console.log(`These are you starting stats:
Level: ${level}
Health: ${health}`);
  forest();
}
function forest() {
  let choice1 =
    readlineSync.question(`Your first step on your journey is into the haunted woods. You see a split in the road, one path leads to a dark cave, the other leads to a hut.
Do you
1. Enter the cave
2. Enter the hut
(Type 1 or 2): `);
  if (choice1 !== "1" && choice1 !== "2") {
    console.log("Invalid choice. Please choose 1 or 2.");
  } else if (choice1 === "1") {
    console.log("You enter the cave");
    console.log(`Level: ${level}
Health: ${health}`);
    cave();
  } else if (choice1 === "2") {
    console.log("You enter the hut");
    console.log(`Level: ${level}
Health: ${health}`);
    hut();
  }
}
function cave() {
  console.log(
    "You enter the cave and find a goblin! The goblin attacks you! You lose 10 health.",
  );
  health -= 10;
  let choice2 = readlineSync.question(`Do you
1. Fight the goblin
2. Run away
(Type 1 or 2): `);
  if (choice2 !== "1" && choice2 !== "2") {
    console.log("Invalid choice. Please choose 1 or 2.");
  } else if (choice2 === "1") {
    console.log("You defeat the goblin! You leveled up!");
    levelUp();
  } else if (choice2 === "2") {
    console.log("You run away safely.");
  }
  console.log(`Level: ${level}
Health: ${health}`);
  desert();
}
function hut() {
  let choice3 = readlineSync.question(`You enter the hut and find a elf.
The elf offers you
1. A red potion
2. A blue potion
(Type 1 or 2): `);
  if (choice3 !== "1" && choice3 !== "2") {
    console.log("Invalid choice. Please choose 1 or 2.");
  } else if (choice3 === "1") {
    health += 20;
  } else if (choice3 === "2") {
    health -= 10;
  }
  console.log(`Level: ${level}
Health: ${health}`);
  desert();
}
function desert() {
  console.log(
    "After leaving the forest, you find yourself in a vast desert with no end in sight.",
  );
  let choice4 =
    readlineSync.question(`As you wander through the desert, you come across a sandstorm.
Do you
1. Take shelter in a nearby cave
2. Keep walking through the storm
(Type 1 or 2): `);
  if (choice4 !== "1" && choice4 !== "2") {
    console.log("Invalid choice. Please choose 1 or 2.");
  } else if (choice4 === "1") {
    console.log("You take shelter in the cave and wait out the storm.");
  } else if (choice4 === "2") {
    console.log("You keep walking through the storm and lose 20 health.");
    health -= 20;
  }
  console.log(`Level: ${level}
Health: ${health}`);
  mountain();
}
function mountain() {
  console.log(
    "After leaving the desert, you find yourself at the base of the mountain where the demon king's castle is built on. You start climbing the mountain, and eventually encounter a group of bandits.",
  );
  let choice5 = readlineSync.question(`Do you
1. Fight the bandits
2. Try to sneak past them
(Type 1 or 2): `);
  if (choice5 !== "1" && choice5 !== "2") {
    console.log("Invalid choice. Please choose 1 or 2.");
  } else if (choice5 === "1") {
    console.log("You fight the bandits and win! You leveled up!");
    levelUp();
  } else if (choice5 === "2") {
    console.log("You successfully sneak past the bandits!");
  }
  console.log(`Level: ${level}
Health: ${health}`);
  gate();
}
function gate() {
  console.log(
    "After climbing the mountain, you finally reach the gate of the demon king's castle. There you find a guard blocking the entrance.",
  );
  let choice6 = readlineSync.question(`Do you
1. Fight the guard
2. Wait for the guard to fall asleep and sneak in
(Type 1 or 2): `);
  if (choice6 !== "1" && choice6 !== "2") {
    console.log("Invalid choice. Please choose 1 or 2.");
  } else if (choice6 === "1") {
    console.log("You fight the guard and win! You leveled up!");
    levelUp();
  } else if (choice6 === "2") {
    console.log(
      "You wait for the guard to fall asleep and successfully sneak in!",
    );
  }
  console.log(`Level: ${level}
Health: ${health}`);
  demonKing();
}
function demonKing() {
  console.log(
    "After entering the castle, you finally confront the demon king. The demon king is a formidable opponent with high health and attack.",
  );
  let demonKingHealth = 200;
  while (health > 0 && demonKingHealth > 0) {
    let demonKingDamage = Math.ceil(Math.random() * 10);
    let heroDamage = Math.ceil(Math.random() * 20);
    let choice7 = readlineSync.question(`Do you
1. Attack the demon king
2. Defend against the demon king's attack
(Type 1 or 2): `);
    if (choice7 !== "1" && choice7 !== "2") {
      console.log("Invalid choice. Please choose 1 or 2.");
    } else if (choice7 === "1") {
      demonKingHealth -= heroDamage;
      health -= demonKingDamage;
      console.log(`You deal ${heroDamage} damage to the demon king.
The demon king deals ${demonKingDamage} damage to you.`);
      console.log(`Your health: ${health}
Demon king's health: ${demonKingHealth}`);
    } else if (choice7 === "2") {
      let reducedDemonKingDamage = Math.ceil(demonKingDamage / 2);
      health -= reducedDemonKingDamage;
      console.log(
        `The demon king deals ${reducedDemonKingDamage} damage to you.`,
      );
      console.log(`Your health: ${health}
Demon king's health: ${demonKingHealth}`);
    }
    if (health <= 0) {
      console.log("You have been defeated by the demon king. Game over.");
    } else if (demonKingHealth <= 0) {
      console.log(
        "Congratulations! You have defeated the demon king and completed the adventure!",
      );
    }
  }
  console.log("Would you like to play again?");
  let choice8 = readlineSync
    .question(
      `Enter Y if you would like to play again
Enter N if you would like to stop playing: `,
    )
    .toUpperCase();
  if (choice8 !== "Y" && choice8 !== "N") {
    console.log("Invalid choice. Please enter Y or N.");
  } else if (choice8 === "Y") {
    introduction();
  } else if (choice8 === "N") {
    console.log("Thank you for playing the game!");
  }
}
introduction();
