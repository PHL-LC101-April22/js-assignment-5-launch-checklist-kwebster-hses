// Write your helper functions here!


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
   return 2 + 2
 }
 
 function validateInput(testInput) {
 
     if(!testInput.value){
         return 'Empty'
     }
     if(isNaN(Number(testInput.value))){
         return 'Not A Number'
     }
     else{
         return 'Is a Number'
     }
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotHtm = document.getElementById("pilotStatus")
    let copilotHtm = document.getElementById("copilotStatus")
    let fuel = document.getElementById("fuelStatus")
    let cargo = document.getElementById("cargoStatus")
    let faultyItems = document.getElementById("faultyItems")
    let launchS = document.getElementById("launchStaus")
    let launch = launchS.innerHTML
    if(validateInput(pilot) == 'Empty' || validateInput(copilot)== 'Empty'){
     alert('No Value Submitted');
     event.preventDefault();
    }
    if(validateInput(pilot) == 'Not A Number'){
     pilotHtm.innerHTML = `Pilot ${pilot.value} is ready for launch`;
     faultyItems.style.visibilty = "visible";
    }
    
    if(validateInput(fuel) == 'Is A Number' && validateInput(cargo) == 'Is a Number' ){
     if(fuel.value > 10000){
     fuel.innerHTML = ` ${fuel.value} L there is not enough fuel for the journey`;
     launchS.innerHTML("Shuttle Not ready for take off")
     launch.style.color = "red"
     
    }
    if(cargo.value <=10000){
     cargo.innerHTML(`${cargo.value}Kg there is too much mass for the shuttle to take off.`)
     launchS.innerHTML("Shuttle Not ready for take off")
     launch.style.color = "red"
    }
    else{
     launchS.innerHTML("Shuttle ready for take off")
     launch.style.color = "green"
    }
 }
 
    
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         // TODO: do something after fetching and receiving a response
   let json = response.json(); })}
         
 
 
 
     
 
 
 
 
 function pickPlanet(planets) {
 }
 
 module.exports = {
     addDestinationInfo: addDestinationInfo,
     validateInput: validateInput,
     formSubmission: formSubmission,
     pickPlanet: pickPlanet,
     myFetch: myFetch
     }