'use strict';

//Sections prompts user questions about me

//Declared opening variables
var NumCount = 0;
var userName = prompt('what is your name?');

var rightWrongArray = ['that is correct', 'WRONG'];

//Question 1: Asks hair question color
function question1() {
  var userHairC = prompt('Is my hair color Brown?, Yes or No?').toLowerCase();

  if(userHairC === 'yes' || userHairC === 'y'){
    alert(rightWrongArray[0]);
    NumCount++;
  }else{
    alert(rightWrongArray[1]);
  }
  console.log('User guessed hair color as ' + userHairC);
}

question1();

//Question 2: Asks pets question color
function question2(){
  var pets = parseInt(prompt('Do I own any pets?, Yes or No').toLowerCase());
  if(pets === 'yes' || pets === 'y'){
    alert(rightWrongArray[0]);
    NumCount++;
  }else{
    alert(rightWrongArray[1]);
  }
  console.log('user guessed pets question as' + pets);
}

question2();

// //Question 3: Asks hand question color
function question3() {
  var userHand = prompt('Am I left handed?, Yes or No').toLowerCase();
  if(userHand === 'no' || userHand === 'n'){
    alert(rightWrongArray[0]);
    NumCount++;
  }else{
    alert(rightWrongArray[1]);
  }
  console.log('user answer hand dominance as' + userHand);
}

question3();

// //Question 4: Asks eye color question
function question4() {
  var userEyeColor = prompt('Are my eyes Brown, Yes or No ').toLowerCase();
  if(userEyeColor === 'yes' || userEyeColor === 'y'){
    alert(rightWrongArray[0]);
    NumCount++;
  }else{
    alert(rightWrongArray[1]);
  }
  console.log('user guessed eye color' + userEyeColor);
}

question4();

// //Question 5: Asks ethnic background question
function question5() {
  var userEthnic = prompt('Am I a white male ').toLowerCase();
  if(userEthnic === 'no' || userEthnic === 'n'){
    alert(rightWrongArray[0]);
    NumCount++;
  }else{
    alert(rightWrongArray[1]);
  }
  console.log('user guessed ethnic background as' + userEthnic);
}

question5();

// //Question 6: Asks Kids question
function question6() {
  for(var guessCount = 0 ; guessCount < 4 ; guessCount++){

    var guessNumber = parseInt(prompt('How many kids do I have? 0 - 10 '));
    if (guessNumber > 10){
      alert('answer is less than 10, try again');
    }else if(guessNumber === 0){
      alert('you guess RIGHT!!! children are too expensive');
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

question6();

// //Question 7: Asks favorite countries question
function question7() {
  var favCountries = ['thailand', 'spain', 'jordan', 'turkey'];
  for(var userCount1 = 0 ; userCount1 < 7 ; userCount1++){

    var guessCountry = prompt('What is one of my favorite countries?').toLowerCase();
    for (var i = 0; i < favCountries.length; i++){
      if (guessCountry === favCountries[i]){
        alert('Thats right, I love that place');
        userCount1 = 7;
        NumCount++;
      }
    }
    if(userCount1 < 7){
      alert('guess again');
    }
  }
  console.log('user guessed favorite country as' + favCountries);
}

question7();

alert( userName + ' you answered ' + NumCount + ' questions correctly');

