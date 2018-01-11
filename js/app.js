'use strict';

//Sections prompts user questions about me

//Declared opening variables
var NumCount = 0;
var userName = prompt('what is your name?');

//Question 1: Asks hair question color
var userHairC = prompt('Is my hair color Brown?, Yes or No?').toLowerCase();

if(userHairC === 'yes' || userHairC === 'y'){
  alert('that is correct');
  NumCount++;
}else{
  alert('WRONG');
}
console.log('User guessed hair color as ' + userHairC);


//Question 2: Asks pets question color
var pets = parseInt(prompt('Do I own any pets?, Yes or No').toLowerCase());
if(pets === 'yes' || pets === 'y'){
  alert('that is correct');
  NumCount++;
}else{
  alert('WRONG');
}
console.log('user guessed pets question as' + pets);


//Question 3: Asks hand question color
var userHand = prompt('Am I left handed?, Yes or No').toLowerCase();
if(userHand === 'yes' || userHand === 'y'){
  alert('that is correct');
  NumCount++;
}else{
  alert('WRONG');
}
console.log('user answer hand dominance as' + userHand);


//Question 4: Asks eye color question
var userEyeColor = prompt('Are my eyes Brown, Yes or No ').toLowerCase();
if(userEyeColor === 'yes' || userEyeColor === 'y'){
  alert('that is correct');
  NumCount++;
}else{
  alert('WRONG');
}
console.log('user guessed Hand Dominance' + userEyeColor);


//Question 5: Asks ethnic background question
var userEthnic = prompt('Am I a white male ').toLowerCase();
if(userEthnic === 'yes' || userEthnic === 'y'){
  alert('that is correct');
  NumCount++;
}else{
  alert('WRONG');
}

console.log('user guessed ethnic background as' + userEthnic);



//Question 6: Asks Kids question
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


//Question 7: Asks favorite countries question
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

alert( userName + ' you answered ' + NumCount + ' questions correctly');

