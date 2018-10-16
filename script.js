"use strict";

let grantHealth = 10;
let userHealth = 40;
let userWins = 0;

const startGame = () => {
    let play = prompt("Do you want to play?");
    if (play === "yes") {
        let name = prompt("What is your name?");
        startCombat(play, name);
    }
}

const startCombat = (play, name) => {
    while (play) {
        let choice = prompt("Do you want to attack or quit?");
        if (choice === "attack") {
            grantHealth -= getDamage();
            userHealth -= getDamage();
            console.log(`Grant has ${grantHealth} health left.`);
            console.log(`${name} has ${userHealth} health left.`);

            if (grantHealth <= 0) {
                userWins += 1;
                grantHealth = 10;
                console.log(`You have beat Grant! You need to win ${3 - userWins} more rounds.`)
            }

            if (userHealth <= 0) {
                console.log("You lose!")
                break;
            }

            if (userWins === 3) {
                console.log("You win!")
                break;
            }
        } else{
            break;
        }
    }
    return;
}

const getDamage = () => {
    return Math.floor((Math.random() * 5) + 1);
}

startGame();


