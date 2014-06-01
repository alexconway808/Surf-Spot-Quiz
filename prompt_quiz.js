(function(){


var answer = prompt ("What is the first North Shore surf spot?");
var total_score = 0;
if (answer == "Haleiwa") {
	total_score += 1;
} else {
	total_score == 0;
}


var answer = prompt ("What is the second North Shore surf spot?");
if (answer == "Laniakea") {
	total_score += 1;
} else {
	total_score == 0;
}


var answer = prompt ("What is the third North Shore surf spot?");
if (answer == "Waiamea Bay") {
	total_score += 1;
} else {
	total_score = 0;
}


var answer = prompt ("What is the forth North Shore surf spot?");
if (answer == "Pipeline") {
	total_score += 1;
} else {
	total_score = 0;
}


var answer = prompt ("What is the fifth North Shore surf spot?");
if (answer == "Sunset") {
	total_score += 1;
} else {
	total_score = 0;
}

alert(total_score);

})();



