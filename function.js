
var first = ("Julie ")
var mid = ("Ann ")
var last = (" Henry")

function myName(variable1, variable2, variable3){
	return  variable1 + variable2 + variable3;
}

myName(first, mid, last);


// _______________________________________________________________________
// _______________________________________________________________________
// _______________________________________________________________________



var names = prompt("Type Justin or Alexa");

function nameInfo(kidInfo){
	if( kidInfo === "Justin"){
		alert(" That's my stepson. He'll be 14 on Monday ");
	}else if( kidInfo === "Alexa"){
		alert(" Stepdaughter... She's 10 and so much FUN!! ");
	}else{
		alert("I only have 2!");
	}
}

nameInfo(names);



// _______________________________________________________________________
// _______________________________________________________________________
// _______________________________________________________________________



var age = prompt("Type my age... 38, 48 or 58?");

function ageGuess(ageNumber){
	if( ageNumber === "38"){
		alert("Thanks! But no...");
	}else if( ageNumber === "48"){
		alert(" you are CORRECT!");
	}else if( ageNumber === "58"){
		alert(" OUCH! Don't age me!");
	}else{
		alert("Not a valid choice");
	}
}

ageGuess(age);


