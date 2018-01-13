'use strict';

//Sections prompts user questions about me

//Declared opening variables
var NumCount = 0;
var userName = prompt('what is your name?');

var rightWrongArray = [' that is Correct', ' Incorrect '];

//Question 1: Asks hair question color
function question1() {
  var userHairC = prompt('Is my hair color Brown?, Yes or No?').toLowerCase();

  if(userHairC === 'yes' || userHairC === 'y'){
    alert('RIGHT!! You answered ' + '"' + userHairC + '"' + rightWrongArray[0]);
    NumCount++;
  }else{
    alert('WRONG!! You answered ' + '"' + userHairC + '" that is ' + rightWrongArray[1]);
  }
  console.log('User guessed hair color as ' + userHairC);
}



//Question 2: Asks pets question color
function question2(){
  var pets = parseInt(prompt('Do I own any pets?, Yes or No').toLowerCase());
  if(pets === 'no' || pets === 'n'){
    alert('RIGHT!! You answered ' + '"' + pets + '"' + rightWrongArray[0]);
    NumCount++;
  }else{
    alert('WRONG!! You answered ' + '"' + pets + '" that is ' + rightWrongArray[1]);
  }
  console.log('user guessed pets question as' + pets);
}



// //Question 3: Asks hand question color
function question3() {
  var userHand = prompt('Am I left handed?, Yes or No').toLowerCase();
  if(userHand === 'no' || userHand === 'n'){
    alert('RIGHT!! You answered ' + '"' + userHand + '"' + rightWrongArray[0]);
    NumCount++;
  }else{
    alert('WRONG!! You answered ' + '"' + userHand + '" that is ' + rightWrongArray[1]);
  }
  console.log('user answer hand dominance as' + userHand);
}



// //Question 4: Asks eye color question
function question4() {
  var userEyeColor = prompt('Are my eyes Brown, Yes or No ').toLowerCase();
  if(userEyeColor === 'yes' || userEyeColor === 'y'){
    alert('RIGHT!! You answered ' + '"' + userEyeColor + '"' + rightWrongArray[0]);
    NumCount++;
  }else{
    alert('WRONG!! You answered ' + '"' + userEyeColor + '" that is ' + rightWrongArray[1]);
  }
  console.log('user guessed eye color' + userEyeColor);
}



// //Question 5: Asks ethnic background question
function question5() {
  var userEthnic = prompt('Am I a white male ').toLowerCase();
  if(userEthnic === 'no' || userEthnic === 'n'){
    alert('RIGHT!! You answered ' + '"' + userEthnic + '"' + rightWrongArray[0]);
    NumCount++;
  }else{
    alert('WRONG!! You answered ' + '"' + userEthnic + '" that is ' + rightWrongArray[1]);
  }
  console.log('user guessed ethnic background as' + userEthnic);
}



// //Question 6: Asks Kids question
function question6() {
  for(var guessCount = 0 ; guessCount < 4 ; guessCount++){

    var guessNumber = parseInt(prompt('How many kids do I have? 0 - 10 '));
    if (guessNumber > 10){
      alert('answer is less than 10, try again');
    }else if(guessNumber === 0){
      alert('you guessed RIGHT!!! children are too expensive');
      NumCount++;
      break;
    }else if(guessCount === 3){
      alert('Sorry You\'re out of tries');
    }else{
      alert('guess again');
    }
  }
  console.log('user guessed Hand Dominance' + guessNumber);
}


// //Question 7: Asks favorite countries question
function question7() {
  var favCountries = ['thailand', 'spain', 'jordan', 'turkey'];
  for(var userCount1 = 0 ; userCount1 < 4 ; userCount1++){

    var guessCountry = prompt('What is one of my favorite countries?').toLowerCase();
    for (var i = 0; i < favCountries.length; i++){
      if (guessCountry === favCountries[i]){
        alert('Holy cow you guessed right, I love that place');
        userCount1 = 4;
        NumCount++;
      }
    }
    if(userCount1 < 3){
      alert('guess again');
    }else{
      alert('Sorry youre out of tries, my favorite countries are Thailand, Spain, Jordan and Turkey');
    }
  }
  console.log('user guessed favorite country as' + favCountries);
}

question1();
question2();
question3();
question4();
question5();
question6();
question7();

alert( userName + ' you answered ' + NumCount + ' questions correctly');

