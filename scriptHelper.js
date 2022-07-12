// Write your helper functions here!


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let revise = document
    revise.innerHTML=`
    
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name:${name} </li>
                     <li>Diameter:${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                     <img src = ${imageUrl}></img>
                     
                 </ol>
                  `
                  
    
 }
 
 function validateInput(testInput) {
 
     if(!testInput){
         return 'Empty'
     }
     if(isNaN(testInput) == true){
         return 'Not A Number'
     }
     else{
         return 'Is a Number'
     }
    
 }
 
 function formSubmission(doc, pilot, copilot, fuelLevel, cargoLevel) {
    
    
   
    let pilotS = document.getElementById("pilotStatus")
    let copilotS = document.getElementById("copilotStatus")
    let fuelS = document.getElementById("fuelStatus")
    let cargoS = document.getElementById("cargoStatus")
    let faultyItems = document.getElementById("faultyItems")
    let launchS = document.getElementById("launchStatus")
    let choice = true ;
    faultyItems.style.visibility = "hidden"
   
    
  
    
    
    if(validateInput(pilot.value) == 'Empty' || validateInput(copilot.value)== 'Empty'){
        choice = false;
        alert('Ensure All Fields Are Filled Correctly');
     //window.preventDefault();
     
   }

   if(validateInput(fuelLevel.value) == 'Empty' || validateInput(cargoLevel.value)== 'Empty'){
    choice = false;
    alert('Ensure all fields have corresponding values');
    //window.preventDefault();
    
  }
     
    
    
    
    if(validateInput(pilot.value) != 'Not A Number' || validateInput(copilot.value)!= 'Not A Number'){
     pilotS.innerHTML = `Pilot ${pilot.value} is not ready for launch`;
     copilotS.innerHTML = `Pilot ${copilot.value} is not ready for launch`
    // faultyItems.style.visibility = "visible";
    choice = false;
    alert('Number where a string should be')
    
    }


    
   
 if(validateInput(fuelLevel.value) == 'Is a Number' ){
    console.log("I AM HEre");
       if(fuelLevel.value < 10000){
        fuelS.innerHTML = ` ${fuelLevel.value} L there is not enough fuel for the journey`;
        choice = false;
       // launchS.innerHTML="Shuttle Not ready for take off"
       // launchS.style.color = "red"
        
    
   }
        
} 
if(validateInput(cargoLevel.value) == 'Is a Number'){
    
    if(cargoLevel.value >10000 ){
        cargoS.innerHTML = 'Cargo to Large to Voyage'
        
        choice = false;
    }


   if(cargoLevel.value <= 10000 ){
        cargoS.innerHTML = 'Cargo to Low enough to Voyage'
        
 
}
 }
    if(choice == false){
        launchS.innerHTML="Shuttle Not ready for take off"
        launchS.style.color = "red"
        faultyItems.style.visibility = "visible"
    }
    if(choice == true){
        launchS.innerHTML="Shuttle ready for take off"
        launchS.style.color = "green"
        faultyItems.style.visibility = "visible"

    }


} 


 async function myFetch() {
     let planetsReturned;
     let json = []
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         // TODO: do something after fetching and receiving a response
   json = response.json();  }); return json }
         
 
 
 
     
 
 
 
 
 function pickPlanet(planets) {
    let index = 0;
    
    for(let i in planets){
        index += 1
        if(index > planets.length){
            index -=1
        }
        if(index<1){
            index +=1   
        }
    }
   // console.log(planets)
    return Math.round(Math.random()*index)

 }

 
/* module.exports = {
     addDestinationInfo: addDestinationInfo,
     validateInput: validateInput,
     formSubmission: formSubmission,
     pickPlanet: pickPlanet,
     myFetch: myFetch
     } */