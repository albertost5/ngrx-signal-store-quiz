import {Question} from '../models/question.model';
import {QUESTIONS} from '../data/questions';

export interface QuizStoreState {
  readonly questions: Question[];
  readonly answers: number[];
}

export const initialState: QuizStoreState = {
  questions: QUESTIONS,
  answers: [],
}
