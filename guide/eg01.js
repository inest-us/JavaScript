var color = prompt("What color car would you like to buy?");
switch (color) {
    case "red": 
        alert("You bought a red car!");
        break;
    case "black": 
        alert("You bought a black car!");
        break;    
    case "white": 
        alert("You bought a white car!");
        break;
    default:
        alert("The color: " + color + " is unknown");    
} 