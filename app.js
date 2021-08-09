

const startBtn = document.querySelector(".quiz-start")
const quizExit = document.querySelector(".quiz-exit")
const quizRestart = document.querySelector(".quiz-restart")
const startScreen = document.querySelector("#start-screen")
const quizScreenInfo = document.querySelector("#quiz-screen-info")
const quizScreenQue = document.querySelector("#quiz-screen-que")
const nextQuestion = document.querySelector(".next-question")



startBtn.addEventListener("click", () => {
    startScreen.classList.add("inactive")
    quizScreenInfo.classList.remove("inactive")
})

quizExit.addEventListener("click", () => {
    startScreen.classList.remove("inactive")
    quizScreenInfo.classList.add("inactive")
})

quizRestart.addEventListener("click", () => {
    quizScreenQue.classList.remove("inactive")
    quizScreenInfo.classList.add("inactive")
    showQues(questionCount)
})

nextQuestion.addEventListener("click", nextQuest)

let questionCount = 0


function nextQuest() {
    if (questionCount < questionSet.length) {
        questionCount++

        showQues(questionCount)
        console.log("kk")
    } else { console.log("done") }
}


function showQues(index) {
    let quizQue = document.querySelector(".quiz-ques h2");
    quizQue.innerHTML = `${index+1}. ${questionSet[index].question}`

    let quizOptions = document.querySelector(".quiz-options ul");
    quizOptions.innerHTML = `
<li class="quiz-option">${questionSet[index].options[0]}</li>
<li class="quiz-option">${questionSet[index].options[1]}</li>
<li class="quiz-option">${questionSet[index].options[2]}</li>
<li class="quiz-option">${questionSet[index].options[3]}</li>
`
let qCount=document.querySelector(".qCount")
qCount.innerHTML=`<b>${index+1}</b>`
}






