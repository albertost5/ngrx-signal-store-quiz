import {signalStore, withComputed, withState} from '@ngrx/signals';
import {initialState} from './quiz.slice';
import {computed} from '@angular/core';

export const QuizStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({questions, answers}) => {
    const currentQuestionIndex = computed(() => answers().length);
    const isDone = computed(() => answers().length === questions().length);
    const currentQuestion = computed(() => questions()[currentQuestionIndex()]);
    const questionCount = computed(() => questions().length);

    return {
      currentQuestionIndex,
      isDone,
      currentQuestion,
      questionCount
    }
  })
)
