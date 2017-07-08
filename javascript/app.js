//Quiz is hidden
function hideQuiz() {
    document.getElementById("quiz").style.display = "none"; 
}

hideQuiz();

//when user clicks start button- quiz appears
function appear() {
    document.getElementById("quiz").style.display = "unset";
    document.getElementById("btn1").style.display = "none"; 
}

//create and display timer for 30 seconds
var count=33;

var counter=setInterval(timer, 1000);

function timer()
{
  count=count-1;
  document.getElementById("timer").innerHTML=count + " secs"; 
  if (count <= 0)
 
  {
     clearInterval(counter);
     reset();
     return;
  }
}


//check user's answers- update score results
var scoreCorrect = 0;
var scoreIncorrect = 0;

function checkAnswers() {
	var question1 = document.getElementById("q1b");
	if (question1.checked === true) {
		scoreCorrect++;}
	else { scoreIncorrect++;}

	var question2 = document.getElementById("q2d");
	if (question2.checked === true) {
		scoreCorrect++; }
	else { scoreIncorrect++; }

	var question3 = document.getElementById("q3a");
	if (question3.checked === true) {
		scoreCorrect++; }
	else { scoreIncorrect++; }

	var question4 = document.getElementById("q4c");
	if (question4.checked === true) {
		scoreCorrect++; }
	else { scoreIncorrect++; }
	
//displays # of correct and incorrect answers
    $("#results").append("<p> Correct answers: " + scoreCorrect);
 +  $("#results").append("<p> Incorrect answers: " + scoreIncorrect);
}

//resets game
function reset() {
	var scoreCorrect = 0;
    var scoreIncorrect = 0;
    hideQuiz();
    document.getElementById("btn1").style.display = "unset"; 
    count=33;
    counter=setInterval(timer, 1000);
    timer();
}