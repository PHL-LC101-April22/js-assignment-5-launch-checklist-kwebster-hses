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
 
 function formSubmission() {
    Event.preventDefault();
    let pilot = document.getElementByName("pilotName")
    let pilotHtm = document.getElementById("pilotStatus")
    pilotHtm.innerHTML = `${pilot}`
    pilotHtm.innerHTML = `asswipe`
    
    console.log(pilotHtm)
    return pilotHtm




   /* let pilot = document.getElementByName("pilotName")
    let pilotHtm = document.getElementById("pilotStatus")
    let copilotHtm = document.getElementById("copilotStatus")
    let fuel = document.getElementById("fuelStatus")
    let cargo = document.getElementById("cargoStatus")
    let faultyItems = document.getElementById("faultyItems")
    let launchS = document.getElementById("launchStaus")
    let launch = launchS.innerHTML
    console.log(pilot)
    Event.preventDefault();
    
    
    
    if(validateInput(pilot) == 'Empty' || validateInput(copilot)== 'Empty'){
     alert('No Value Submitted');
     
     
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
 
    */
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