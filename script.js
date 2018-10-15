"use strict";

let grantHealth=10;
let userHealth=40;
let userWins=0;
let play = prompt("Do you want to play?");

if (play === "yes") {
    let name = prompt("What is your name?");
    while (play === "yes") {
        grantHealth-=Math.floor(Math.random() * 2) + 1;
        userHealth-=Math.floor(Math.random() * 2) + 1;
        console.log(`Grant has ${grantHealth} health left.`);
        console.log(`${name} has ${userHealth} health left.`);
        if (grantHealth <= 0) {
            userWins += 1;
            grantHealth=10;
        }
    
        if (userHealth <= 0) {
            console.log("You lose!")
            break;
        }
    
        if (userWins === 3) {
            console.log("You win!")
            break;
        } 
    }
} else {
    console.log("Bye bye!");
}


