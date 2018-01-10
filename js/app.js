'use strict';

//Sections prompts user questions about me

var NumCount = 0;

var userName = prompt('what is your name?');

var userHairC = prompt('Is my hair color Brown?, Yes or No?').toLowerCase();

if(userHairC === 'yes' || userHairC === 'y'){
  alert('that is correct');
  NumCount++;
}else{
  alert('WRONG');
}
console.log('User guessed hair color as ' + userHairC);


var pets = parseInt(prompt('Do I own any pets?, Yes or No').toLowerCase());
if(pets === 'yes' || pets === 'y'){
  alert('that is correct');
  NumCount++;
}else{
  alert('WRONG');
}
console.log('user guessed pets question as' + pets);

var userHand = prompt('Am I left handed?, Yes or No').toLowerCase();
if(userHand === 'yes' || userHand === 'y'){
  alert('that is correct');
  NumCount++;
}else{
  alert('WRONG');
}
console.log('user answer hand dominance as' + userHand);

var userEyeColor = prompt('Are my eyes Brown, Yes or No ').toLowerCase();
if(userEyeColor === 'yes' || userEyeColor === 'y'){
  alert('that is correct');
  NumCount++;
}else{
  alert('WRONG');
}
console.log('user guessed Hand Dominance' + userEyeColor);

var userEthnic = prompt('Am I a white male ').toLowerCase();
if(userEthnic === 'yes' || userEthnic === 'y'){
  alert('that is correct');
  NumCount++; 
}else{
  alert('WRONG');
}
console.log('user guessed ethnic background as' + userEthnic);

alert( userName + 'you answered ' + NumCount + ' questions correctly');
