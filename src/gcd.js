import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let round = 0; round < 3; round += 1) {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    let answerTrue;
    for (let i = 0; i <= num1; i += 1) {
      if (num1 % i === 0 && num2 % i === 0) answerTrue = i;
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
