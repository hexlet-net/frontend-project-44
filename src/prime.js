import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default () => {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let round = 0; round < 3; round += 1) {
    const num = Math.floor(Math.random() * 100 + 3);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    let answerTrue = 'yes';
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) answerTrue = 'no';
    }
    if (answerTrue === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerTrue}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
