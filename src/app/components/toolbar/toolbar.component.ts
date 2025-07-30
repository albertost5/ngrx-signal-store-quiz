import {Component, inject, input, Input} from '@angular/core';
import { SharedModule } from '../../shared.module';
import {QuizStore} from '../../store/quiz.store';

@Component({
    selector: 'app-toolbar',
    imports: [SharedModule],
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  readonly caption = input.required<string>();
  readonly icon = input('');
  readonly store = inject(QuizStore);
}
