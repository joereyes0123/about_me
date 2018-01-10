'use strict';

//Asks user to guess question about me

var NumCount = 0;
var userHairC = prompt('What Color is my hair? Brown, Red or Blonde?').toLowerCase();

    if(userHairC === 'brown'){
    alert('that is correct');
    NumCount++; 
        }else{
        alert('WRONG');
            }
    console.log('User guessed hair color' + userHairC);


var pets = parseInt(prompt('How many pets do you think I have 0, 1 or 2?'));
    if(pets === 0){
    alert('that is correct');
    NumCount++; 
        }else{
        alert('WRONG');
    }
    console.log('user guessed number of pets' + pets);

var userHand = prompt('Guess my hand dominance, Right or Left?').toLowerCase();
    if(userHand === 'right'){
    alert('that is correct');
    NumCount++; 
        }else{
        alert('WRONG');
    }
    console.log('user guessed Hand Dominance' + userHand);

var userEyeColor = prompt('Are my eyes Brown, Yes or No ').toLowerCase();
    if(userEyeColor === 'yes'){
    alert('that is correct');
    NumCount++; 
        }else{
        alert('WRONG');
    }
    console.log('user guessed Hand Dominance' + userEyeColor);

var userEthnic = prompt('What in my background? Latino, BLack, White ').toLowerCase();
    if(userEthnic === 'latino'){
    alert('that is correct');
    NumCount++; 
        }else{
        alert('WRONG');
    }
    console.log('user guessed Hand Dominance' + userEthnic);

    alert( "you answered " + NumCount + " questions correctly");
