// list variables in an array
let destinations = ['San Francisco', 'New York', 'Dallas', "Los Angeles", 'Russia'];
let restaurants = ['Black Bear', 'KFC', 'Olive Garden', 'Pieolegy', 'Boiling Crab', 'WingStop'];
let transportation = ['Rental Car', 'Uber', 'Bus', 'Train','plane', 'horse', 'Lyft'];
let entertainments = ['Movies', 'Concert', 'Walk in Park', 'Bowling', 'Go to the Bar'];

// generate random numbers\
function randomPick(trip){    
    randomNumber = Math.floor(Math.random()* trip.length)
    return trip[randomNumber]
    
}
// Display picks from arrays
function selected(){
    console.log('Traveling to ' + randomPick(destinations))
    console.log('Restaurants is ' + randomPick(restaurants))
    console.log('Transportation is ' + randomPick(transportation))
    console.log('Entertainment is ' + randomPick(entertainments))
}

selected()