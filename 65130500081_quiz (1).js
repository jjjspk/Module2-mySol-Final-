//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:   65130500081    Name: Supakorn Preechanarit

import { quizQuestions, getRandomQuiz } from "./quizQuestions.js";

let randomQuiz;

function init() {
//insert your code here
    const NewQuiz = document.createElement("button")
    NewQuiz.textContent = "New Quiz"
    NewQuiz.addEventListener("click",generateQuiz)

    // NewQuiz.addEventListener("click",(generateQuiz) => console.log("ddsds"))

    const ClearQuiz = document.createElement("button")
    ClearQuiz.textContent = "Clear Quiz"
    ClearQuiz.addEventListener("click",clearQuiz)


    document.getElementById("menu").appendChild(NewQuiz);
    document.getElementById("menu").appendChild(ClearQuiz);
    






}

function generateQuiz() {
//insert your code here

    const genQuiz = document.getElementById("quizContainer");

    genQuiz.addEventListener("click", clearQuiz);










    //4. create tag p

const tagP = document.createElement('p')  
tagP.textContent 
document.getElementById("question").appendChild(tagP);




   //5.3




//    const text = document.createElement('p')  
//    text.textContent = 






   const question = document.createElement('div')  
    question.setAttribute('id',"question")   
     document.getElementsById('question').appendChild(Choice1)
     document.getElementsById('question').appendChild(Choice2)
     document.getElementsById('question').appendChild(Choice3)
     document.getElementsById('question').appendChild(Choice4)




    //5.4
     const Choice1 = document.createElement("button")   
     Choice1.addEventListener("click",checkAnswer)
     document.getElementById("question").appendChild(Choice1);



     const Choice2 = document.createElement("button")   
     Choice2.addEventListener("click",checkAnswer)
     document.getElementById("question").appendChild(Choice2);



     const Choice3 = document.createElement("button")   
     Choice3.addEventListener("click",checkAnswer)
     document.getElementById("question").appendChild(Choice3);




     const Choice4 = document.createElement("button")   
     Choice4.addEventListener("click",checkAnswer)
     document.getElementById("question").appendChild(Choice4);

   //6.
   
   
   document.getElementsById('quizContainer').appendChild(question)






getRandomQuiz()
quizQuestions()




}

function clearQuiz() {
//insert your code here

    clearQuiz = '';

const clear1 = document.removeChild
clear1.removeChild = document.getElementsByTagName('p')

const clear2 = document.removeChild
clear2.removeChild = document.getElementsByTagName('p')

const clear3 = document.removeChild
clear3.removeChild = document.getElementsByTagName('p')

const clear4 = document.removeChild
clear4.removeChild = document.getElementsByTagName('p')


}

function checkAnswer(e) {
//insert your code here

    const answer = document.getElementsByClassName('answer')
    answer.textContent = 'Correct'

    const answer2 = document.getElementsByClassName('answer')
    answer2.textContent = 'Incorrect'



}

init();
