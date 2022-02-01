// list variables in an array
let destinations = ['San Francisco', 'New York', 'Dallas', "Los Angeles", 'Russia'];
let restaurants = ['Black Bear', 'KFC', 'Olive Garden', 'Pieolegy', 'Boiling Crab', 'WingStop'];
let transportation = ['Rental Car', 'Uber', 'Bus', 'Train','plane', 'horse', 'Lyft'];
let entertainments = ['Movies', 'Concert', 'Walk in Park', 'Bowling', 'Go to the Bar'];

// generate random numbers\
function randomPick(trip){    
    randomNumber = Math.floor(Math.random()* trip.length)
    
    console.log(trip[randomNumber])
    
}
randomPick(destinations);
randomPick(restaurants);
randomPick(transportation);
randomPick(entertainments);