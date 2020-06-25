var vacationType = prompt("What type of trip do you want to take? Musical, Adventurous, or Tropical?");
var tripDestination
if (vacationType === "musical") {tripDestination = "New Orleans"}
else if (vacationType === "tropical") {tripDestination = "Beach Vacation in Mexico"}
else if (vacationType === "adventurous") {tripDestination = "Whitewater Rafting the Grand Canyon"}
else {tripDestination = "Try again!"}

var groupSize = prompt("How many people are you travelling with?")
var travelType
if (groupSize <= 2){travelType = "first class flight"}
else if (groupSize > 2 && groupSize<= 5) {travelType = "helicopter"}
else if (groupSize >= 5) {travelType = "charter flight"}

var result
if (tripDestination === "New Orleans" && travelType === "first class flight") {
    result = `Since you are taking ${groupSize} people on a ${vacationType} trip, you should take a ${travelType} to ${tripDestination}!`
    }
    else if (tripDestination === "New Orleans" && travelType === "helicopter"){ 
result = `Since you are taking ${groupSize} people on a ${vacationType} trip, you should take a ${travelType} to ${tripDestination}!`
    } 
        else if (tripDestination === "New Orleans" && travelType === "charter flight"){ 
        result = `Since you are taking ${groupSize} people on a ${vacationType} trip, you should take a ${travelType} to ${tripDestination}!`
            }   
            else if (tripDestination === "Beach Vacation in Mexico" && travelType === "first class flight") {
                result = `Since you are taking ${groupSize} people on a ${vacationType} trip, you should take a ${travelType} to a ${tripDestination}!`
                }
                else if (tripDestination === "Beach Vacation in Mexico" && travelType === "helicopter"){ 
            result = `Since you are taking ${groupSize}people  on a ${vacationType} trip, you should take a ${travelType} to a ${tripDestination}!`
                } 
                    else if (tripDestination === "Beach Vacation in Mexico" && travelType === "charter flight"){ 
                    result = `Since you are taking ${groupSize} people on a ${vacationType} trip, you should take a ${travelType} to a ${tripDestination}!`
                        }  
                        else if (tripDestination === "Whitewater Rafting the Grand Canyon" && travelType === "first class flight") {
                            result = `Since you are taking ${groupSize} people on a ${vacationType} trip, you should take a ${travelType} to go ${tripDestination}!`
                            }
                            else if (tripDestination === "Whitewater Rafting the Grand Canyon" && travelType === "helicopter"){ 
                        result = `Since you are taking ${groupSize} people on a ${vacationType} trip, you should take a ${travelType} to go ${tripDestination}!`
                            } 
                                else if (tripDestination === "Whitewater Rafting the Grand Canyon" && travelType === "charter flight"){ 
                                result = `Since you are taking ${groupSize} people on a ${vacationType} trip, you should take a ${travelType} to go ${tripDestination}!`
                                    }  
                                    else {result = "Looks like something went wrong. Please click the refresh button and try again!"}
console.log(result)
document.write(result)