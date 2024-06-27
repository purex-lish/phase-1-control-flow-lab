  function scuberGreetingForFeet(feet) {
    if (feet <= 400) {
      return 'This one is on me!';
    } else if (feet > 400 && feet < 2000) {
      return 'That will be twenty bucks.';

    } else if (feet > 2000 && feet < 2500 ) {
      return 'I will gladly take your thirty bucks.';

    } else if (feet > 2500) {
      return 'No can do.';
    }
  }
  
function ternaryCheckCity(city){
  if (city === "NYC") { 
     return "Ok, sounds good."; 
    }
    else {
      return "No go.";
      }
    }

  

function switchOnCharmFromTip(tip){
  
if (tip === "generous") {
        return "Thank you so much.";
    } 
    else if (tip === "not as generous") 
      {
        return "Thank you.";
    } 
    else {
        return "Bye.";
    }
}



/*



ternaryCheckCity()
5) returns "Ok, sounds good." when the city is NYC
6) should return "No go." if the destination city is not NYC
switchOnCharmFromTip()
7) should return "Thank you so much." if the tip is generous
8) should return "Thank you." if the tip is not as generous
9) should return "Bye." if anything else

*/