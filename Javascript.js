let answers = [
    'Your question confuses me, mortal.',
    'No, you fool, this is false',
    'I am not sure, this is larger than me',
    'Umm... I dont know man, this is your problem.',
    'Good question, I dont know the answer',
    'OK, that was wierd, you can go away now',
    'This is probably true',
    'Ehhh, its possible, but maybe not.',
    'This is probably true',
    'This is probably true',
    'Ehhh, its possible, but maybe not.',
    'This is most definetely true, yet insignificant.',
    'Nope, no way.',
    'No.'
];
let answer = [];
let question = [];
function eightBoi() {
    question.push(prompt('Ask the 8 ball you question!', 'question'));
    let randNum = Math.floor(Math.random() * answers.length);
    document.getElementById("display").innerHTML = answers[randNum];
    answer.push(answers[randNum]);
}