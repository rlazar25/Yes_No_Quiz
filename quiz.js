let counter = 0;
let counterCorrectAnswers = 0;
let score = 0;
let procenat = 0;
let correctAnswers = [];
let incorrectAnswers = [];


function askQuestion(){
    let userAnswer = confirm(`${pitanja[counter].text}
OK = Yes
Cancle = No`)
    if(userAnswer === pitanja[counter].correctAnswer){
        counterCorrectAnswers++;
        score += pitanja[counter].points;
        correctAnswers.push(pitanja[counter].text)
    } else{
        incorrectAnswers.push(pitanja[counter].text)
    }
    counter++;
    if(counter<pitanja.length){
        askQuestion();
    }
    procenat = ((counterCorrectAnswers /pitanja.length) * 100).toFixed(2);
}
askQuestion();
console.log(`Odgovorili ste tacno na ${counterCorrectAnswers} od ${pitanja.length} pitanja.
Uspesno odgovorili na ${procenat}% pitanja
Vas broj bodova je ${score}.
Tacni odgovori su: ${correctAnswers}
Netacni odgovori su: ${incorrectAnswers}`);

// procenat uspesnosti
// tacni odgovori/netacni odgovori
// bodovi