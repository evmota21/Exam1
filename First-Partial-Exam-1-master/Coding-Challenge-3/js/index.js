function playLogic(){
    playButton.addEventListener('click', event => {
        results.innerHTML = "";
        console.log("hola");
        let boxValue = "undefined";
        let FizzNumber = Number(input.value);
        console.log({FizzNumber});
        for(let i = 0; i < FizzNumber; i++){
            if((i+1)%3 == 0){
                boxValue = "fizz";
            }
            else if((i+1)%5 == 0){
                boxValue = "buzz";
            }
            else boxValue = i+1;

            if((i+1)%3 == 0 && (i+1)%5 == 0){
                boxValue = "fizzbuzz";
            }
            console.log({boxValue});
            results.innerHTML += `<div class="boxResult" id="${i+1}">
            <p> ${boxValue} </p>`
        }
        
        event.preventDefault();
    
    });
}


function init(){
    playLogic();
}



let playButton = document.getElementById('submitBtn');
let input = document.querySelector('.fizzBuzzNumber');
let results = document.querySelector('.resultsSection');

init();


