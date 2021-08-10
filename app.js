const startBtn = document.querySelector(".quiz-start");
const quizExit = document.querySelector(".quiz-exit");
const quizRestart = document.querySelector(".quiz-restart");
const startScreen = document.querySelector("#start-screen");
const quizScreenInfo = document.querySelector("#quiz-screen-info");
const quizScreenQue = document.querySelector("#quiz-screen-que");
const nextQuestion = document.querySelector(".next-question");
let quizOptions = document.querySelector(".quiz-options ul");

let score = 0;
let tickIcon =`<div class="icon tick"><i class="fas fa-check"></i></div>`
let crossIcon =`<div class="icon cross"><i class="fas fa-times"></i></div>`

startBtn.addEventListener("click", () => {
    startScreen.classList.add("inactive");
    quizScreenInfo.classList.remove("inactive");
});

quizExit.addEventListener("click", () => {
    startScreen.classList.remove("inactive");
    quizScreenInfo.classList.add("inactive");
});

quizRestart.addEventListener("click", () => {
    quizScreenQue.classList.remove("inactive");
    quizScreenInfo.classList.add("inactive");
    showQues(questionCount);
});

nextQuestion.addEventListener("click", nextQuest);

let questionCount = 0;

function nextQuest() {
    if (questionCount < questionSet.length - 1) {
        questionCount++;

        showQues(questionCount);
        console.log("kk");
    } else {
        console.log("done");
    }
}

function showQues(index) {
    let quizQue = document.querySelector(".quiz-ques h2");
    quizQue.innerHTML = `${index + 1}. ${questionSet[index].question}`;

    let quizOptions = document.querySelector(".quiz-options ul");
    quizOptions.innerHTML = `
<li class="quiz-option">${questionSet[index].options[0]}</li>
<li class="quiz-option">${questionSet[index].options[1]}</li>
<li class="quiz-option">${questionSet[index].options[2]}</li>
<li class="quiz-option">${questionSet[index].options[3]}</li>
`;
    let qCount = document.querySelector(".qCount");
    qCount.innerHTML = `<b>${index + 1}</b>`;
    // checkAnswer(index)
    let select = document.querySelectorAll(".quiz-option");
    select.forEach((elem) => {
        elem.addEventListener("click", clickHandler);
    });
}

function checkAnswer(answer, index) {
    // let select = document.querySelectorAll(".quiz-option")
    // select.forEach((elem) => {
    //     elem.addEventListener("click",clickHandler)
    let correctAnswer = questionSet[index].answer;
    let userAnswer = answer.innerText;
    // console.log(correctAnswer,answer,index)
    // let userAnswer= kk
    //  selectedOption(event)
    if (userAnswer == correctAnswer) {
       // console.log("yep");
        score++;
      //  console.log(score);
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend",tickIcon);
    } else {
       // console.log("nope");
       answer.classList.add("incorrect");
       //answer.insertAdjacentHTML("beforeend",tickIcon) for not having semicolon it wAS not working
        answer.insertAdjacentHTML("beforeend",crossIcon);

        (Array.from(quizOptions.children).forEach((elem) =>{

            if (elem.innerText == correctAnswer) {
           elem.classList.add("correct")
           answer.insertAdjacentHTML("beforeend",tickIcon)}}
       
            //elem.setAttribute("class","correct")}}
        ))
    }
}

function clickHandler(event) {
    // console.log("yep")
    let select = document.querySelectorAll(".quiz-option"); //cant use this in global as it will show error because options wont be there unless we show question so we get access here
    select.forEach((Element) => {
        //Element.addEventListener("click", ()=>{})
        //  console.log("yep")
        //Element.classList.remove("selected")
        if (event.target.innerHTML == Element.innerHTML) {
            Element.classList.add("selected");
            //   console.log(event.target.innerHTML, Element.innerHTML);
        }
        Element.classList.add("disable");
    });
    let userAnswer = document.querySelector(".selected");
    console.log(userAnswer);
    checkAnswer(userAnswer, questionCount);
}

/* reference for toggling classlistm
const tipBtns = document.querySelectorAll(".tip-btn");
tipBtns.forEach((btn) => {
  btn.addEventListener("click", clickButtonHandler);
});

function clickButtonHandler(event) {
    console.log("hello");
    tipBtns.forEach((btn) => {
      btn.classList.remove("btn-active");

      if (event.target.innerHTML == btn.innerHTML) {
        btn.classList.add("btn-active");
        console.log(event.target.innerHTML, btn.innerHTML);
        tipValue = parseFloat(btn.innerHTML) / 100; //parseFloat only passing the digits not percent so to get that we are dividing it by 100
      }
    });
    customTipBtn.value = "";
    calculate();
  }*/