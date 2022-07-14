
let randNum = Math.floor(Math.random() * 5 + 1);

const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', () =>{
    
    let user_guess = document.querySelector('#answer').value;
    let displayRandNum = document.querySelector('#number-display');
    let displayText = document.querySelector('#display-text');

    if(user_guess == "" || user_guess == null){
        displayText.innerHTML = "TYPE SOMETHING";
        setTimeout(function(){
        displayText.innerHTML = "Pick a number between 0-5";
        }, 1000);
    }

    else if(user_guess == randNum){
        displayText.innerHTML = "CORRECT!";
        displayRandNum.innerHTML = randNum;
        setTimeout(function(){
            displayRandNum.innerHTML = "?";
        displayText.innerHTML = "Pick a number between 0-5";
        }, 1000);
    }
    else{
        displayText.innerHTML = "WRONG!";
        setTimeout(function(){
        displayText.innerHTML = "Pick a number between 0-5";
        user_guess.innerHTML = "";
        }, 1000);
    }
})

