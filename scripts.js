const questions = [{
        'que': 'Which of the following is markup Language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'What year was Javascript Launched?',
        'a': '1998',
        'b': '1995',
        'c': '1994',
        'd': 'None of the above',
        'correct': 'b'
    },

    {
        'que': 'What does CSS stands for?',
        'a': 'Hyper text markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'Json object Notation',
        'd': 'None of the above',
        'correct': 'b'
    },

    {
        'que': 'What does HTML stands for?',
        'a': 'Hyper text markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'Json object Notation',
        'd': 'None of the above',
        'correct': 'a'
    },


]
let index = 0;
let right = 0;
let wrong = 0;
let total = questions.length;

const optioninputs = document.querySelectorAll('.options')
const queBox = document.getElementById("quebox");
const loadquestion = () => {
    if (index == total) {
        return endquiz();
    }

    //reset the web paage
    reset();
    const data = questions[index]
    queBox.innerText = `${index+1}) ${data.que}`;
    //console.log(data);
    optioninputs[0].nextElementSibling.innerText = data.a
    optioninputs[1].nextElementSibling.innerText = data.b
    optioninputs[2].nextElementSibling.innerText = data.c
    optioninputs[3].nextElementSibling.innerText = data.d

}

const prevquestion = () => {
    index--;
    if (index == total) {
        return endquiz();
    }
    const data = questions[index]
    queBox.innerText = `${index+1}) ${data.que}`;
    //console.log(data);
    optioninputs[0].nextElementSibling.innerText = data.a
    optioninputs[1].nextElementSibling.innerText = data.b
    optioninputs[2].nextElementSibling.innerText = data.c
    optioninputs[3].nextElementSibling.innerText = data.d
    const ans = getanswer();
    // console.log(ans, data.correct);

    if (ans == data.correct) {
        right--;
    } else {
        wrong++;
    }
    return;
    //const data = questions[index];

}
const submitquiz = () => {
    const data = questions[index];
    const ans = getanswer();
    // console.log(ans, data.correct);

    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadquestion();
    return;
}
const getanswer = () => {
    let answer;
    optioninputs.forEach(
        (input) => {
            if (input.checked) {
                // console.log(input.value);
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () => {
    optioninputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endquiz = () => {
    document.getElementById("box").innerHTML = `
        <h3> Thank You For Playing The Quiz</h3>
        <h2> Result Of the Quiz :${right} Out Of ${total} </h2>
        `
}

//initial call
loadquestion();