import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default () => {
  const name = greeting();
  console.log('What is the result of the expression?');
  const operand = ['+', '-', '*'];
  for (let round = 0; round < 3; round += 1) {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const indexOperand = Math.floor(Math.random() * 3);
    console.log(`Question: ${num1} ${operand[indexOperand]} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    let answerTrue;
    switch (operand[indexOperand]) {
      case '-':
        answerTrue = num1 - num2;
        break;
      case '+':
        answerTrue = num1 + num2;
        break;
      case '*':
        answerTrue = num1 * num2;
        break;
      default:
        break;
    }
    if (answerTrue === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerTrue}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
