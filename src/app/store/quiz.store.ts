import {getState, patchState, signalStore, withComputed, withHooks, withMethods, withState} from '@ngrx/signals';
import {initialState} from './quiz.slice';
import {computed, effect} from '@angular/core';
import {addAnswerUpdater, resetQuizUpdater} from './quiz.updaters';
import {getCorrectCount} from './quiz.helper';

export const QuizStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({questions, answers}) => {
    const currentQuestionIndex = computed(() => answers().length);
    const isDone = computed(() => answers().length === questions().length);
    const currentQuestion = computed(() => questions()[currentQuestionIndex()]);
    const questionCount = computed(() => questions().length);
    const correctCount = computed(() => getCorrectCount(questions(), answers()));

    return {
      currentQuestionIndex,
      isDone,
      currentQuestion,
      questionCount,
      correctCount
    }
  }),
  withMethods(store => ({
    addAnswer: (index: number) => patchState(store, addAnswerUpdater(index)),
    resetQuiz: () => patchState(store, resetQuizUpdater())
  })),
  withHooks({
    onInit(store) {
      if (localStorage.getItem('quiz')) {
        patchState(store, { ...JSON.parse(localStorage.getItem('quiz')!) })
      }
      // The effect is re-executed on every state change.
      effect(() => {
        const state = getState(store);
        localStorage.setItem('quiz', JSON.stringify(state));
      })
    }
  })
);
