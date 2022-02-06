// list variables in an array
let destinations = ['San Francisco', 'New York', 'Dallas', "Los Angeles", 'Russia'];
let restaurants = ['Black Bear', 'KFC', 'Olive Garden', 'Pieolegy', 'Boiling Crab', 'WingStop'];
let transportation = ['Rental Car', 'Uber', 'Bus', 'Train','plane', 'horse', 'Lyft'];
let entertainments = ['Movies', 'Concert', 'Walk in Park', 'Bowling', 'Go to the Bar'];

// generate random numbers\
function randomPick(trip){    
    randomNumber = Math.floor(Math.random()* trip.length);
    return trip[randomNumber];
    
}

// user wants to change one of trip options 
function wantsAChange(){
    userAnswer = prompt('Would you like to change an option? ').toLowerCase();
    if(userAnswer === 'yes'){
       return userAnswer;
        }
    else if(userAnswer === 'no'){
        return false;
    }
}

function reselect(answer){
    if(answer = 'yes'){
        userAnswer = prompt('What would you like to change? selcect Destination, Restaurant, Transportation, or Entertainments').toLowerCase();
        switch(userAnswer){
            case 'destination':
                return userAnswer;
                break;
            case 'restaurant':
                return userAnswer;
                break;
            case 'transportation':
                return userAnswer;
                break;
            case 'entertainments':
                return userAnswer;
                break;
    }
}
}

function newPick(reselection){
    switch(reselection){
        case 'destination': 
                userAnswer = prompt('Where would you like to go to?');
                return userAnswer;
                break;
            case 'restaurant':
                return userAnswer;
                break;
            case 'transportation':
                return userAnswer;
                break;
            case 'entertainments':
                return userAnswer;
                break;
    }
}

// Display picks from arrays
function selected(){
    console.log('Traveling to ' + randomPick(destinations))
    console.log('Restaurants is ' + randomPick(restaurants))
    console.log('Transportation is ' + randomPick(transportation))
    console.log('Entertainment is ' + randomPick(entertainments))
}

selected();
reselect(wantsAChange());