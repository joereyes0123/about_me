'use strict';

//Asks user to guess question about me

var userHairC = prompt('What Color is my hair? Brown, Red or Blonde?').toLowerCase();

    if(userHairC === 'brown'){
    alert('that is correct');
        }else{
        alert('WRONG');
            }
    console.log('User guessed hair color' + userHairC);


var pets = parseInt(prompt('How many pets do you think I have 0, 1 or 2?'));
    if(pets === 0){
    alert('that is correct');
        }else{
        alert('WRONG');
    }
    console.log('user guessed number of pets' + userHairC);
