import {Question} from '../models/question.model';

export function getCorrectCount(questions: Question[], answers: number[]): number {
  let correctAnswers = 0;
  answers.forEach((answer, idx) => {
    if( answer === questions[idx].correctIndex) {
      correctAnswers++;
    }
  });

  return correctAnswers;
}
