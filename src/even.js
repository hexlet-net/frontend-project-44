import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let round = 0; round < 3; round += 1) {
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const answerTrue = num % 2 === 0 ? 'yes' : 'no';
    if (answerTrue === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerTrue}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
