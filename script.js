// Write your JavaScript code here!
// import {myFetch}  from './scriptHelper.js';

window.addEventListener("load", function() {
    

    let listedPlanets 
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
      //  console.log(result[1])
      //  console.log(result[1].image)
        return listedPlanets
        
    }).then(function (pickAp) {
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let choice = pickPlanet(pickAp)
    let destined = document.getElementById("missionTarget" )
  // console.log(pickAp[choice])
   destined.innerHTML= `<img src = ${pickAp[choice].image}> </img>`;
    //console.log(validateInput('134r'), "I AM HERE")
    console.log(choice)
    return pickAp[choice]

    
    }).then(function(addinfo){
        let destination = document.getElementById("missionTarget")
       // name, diameter, star, distance, moons, imageUrl
        addDestinationInfo(destination,addinfo.name,addinfo.diameter,addinfo.star,addinfo.distance,addinfo.moons,addinfo.image)
        
        
    }).then(function(grabText){
      // event.preventDefault
        let form = document.getElementById("launchForm")
        let pilot = document.getElementById("pilotName")
        let copilotHtm = document.getElementById("copilotName")
        let fuel = document.getElementById("fuelLevel")
        let cargo = document.getElementById("cargoMass")
        let button = document.getElementById("formSubmit");
        console.log(pilot)
        button.addEventListener('click',function(stopLoad){
            stopLoad.preventDefault()
            formSubmission(form,pilot,copilotHtm,fuel,cargo)
            
          }) 
      // Set named function youRang as the click event handler
     // window.addEventListener('submit',formSubmission(form,pilot,copilotHtm,fuel,cargo))
        
      
      
      
       // button.addEventListener("submit", formSubmission(form,pilot,copilotHtm,fuel,cargo));
      
      

        

        
        });
        
    });