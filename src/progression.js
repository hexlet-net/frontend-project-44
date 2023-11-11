import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default () => {
  const name = greeting();
  console.log('What number is missing in the progression?');
  for (let round = 0; round < 3; round += 1) {
    const step = Math.floor(Math.random() * 10);
    const index = Math.floor(Math.random() * 10);
    const arr = [Math.floor(Math.random() * 10)];
    for (let i = 1; i <= 10; i += 1) {
      arr[i] = arr[i - 1] + step;
    }
    const answerTrue = arr[index];
    arr[index] = '..';
    console.log(`Question: ${arr.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    if (answerTrue === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerTrue}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
