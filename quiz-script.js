var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEL = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex){
    var q = questions[questionIndex];
    questionEL.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};
function loadNextQuestion (){
    var selectdOption = document.querySelector('input[type=radio]:checked');
    if(!selectdOption){
        alert('Escolha uma resposta!');
        return;
    }
    var answer = selectdOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 10;   
    }
    selectdOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Seu ponto é:' + score;
        return;
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);