import {PartialStateUpdater} from '@ngrx/signals';
import {QuizStoreState} from './quiz.slice';

export function addAnswerUpdater(index: number): PartialStateUpdater<QuizStoreState> {
  return (state) => ({
    answers: [...state.answers, index]
  })
}

export function resetQuizUpdater(): PartialStateUpdater<QuizStoreState> {
  return _ => ({ answers: [] })
}
