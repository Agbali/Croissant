// //Initiallise the count as o
// //Listen for clicks on the increment button
// //increment the count variable when the button is clicked
// //change the count-el in th ehTML to reflect the neew count
// let counter = document.getElementById("count-el");
// let saveEl = document.getElementById("save-el");
// let count = 0;

// function increment(){
//     count += 1;

//     counter.textContent = count  
// }

// function save(){

//     let recordedCount = count + " - ";

//     saveEl.textContent += recordedCount

//     counter.textContent = 0;
//     count = 0;
//     //console.log(count);
// }

// let myPoints = 3;

// function add3Points(){
//     myPoints += 3;
// }

// function remove1Points(){
//     myPoints -= 1;
// }

// add3Points();
// add3Points();
// add3Points();
// remove1Points();
// remove1Points();

// console.log(myPoints);


let firstCard = 3;
let secondCard = 4 + 13;

let theSum = firstCard + secondCard;
let blackJack = false;
let isAlive = true;
let message = "";


let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

function startGame(){
    
    sumEl.textContent = `Sum: ${theSum}`;

    if(theSum <= 20){
        message = "Do you want to draw a new card?"
    }else if (theSum === 21){
        message = "You've got a Blackjack!"
        blackJack = true;
    }else{
        message = "You're out of the game!"
        isAlive = false;
    }

    messageEl.textContent = message
}