import { QuestionEntity } from './question-entity';
import { QuestionnaireStatus } from './questionnaire-status';
import { SuccessAction } from './success-action';
import { Subject } from 'rxjs';
import { TestingService } from '../services';

export class Questionnaire {
	constructor(
		questions: Array<QuestionEntity>,
		date: Date,
		successAction: SuccessAction,
		public testing$: TestingService
	) {
		this.questions = questions;
		this.date = date;
		this.successAction = successAction;
	}
	public questions: Array<QuestionEntity>;
	public date: Date;
	public successAction: SuccessAction;

	public status: QuestionnaireStatus = QuestionnaireStatus.Untouched;
	public currentIndex: number = 0;
	public onSuccess = new Subject<SuccessAction>();

	public get currentAnswer(): QuestionEntity {
		if (
			typeof this.currentIndex === 'undefined' ||
			this.currentIndex === null ||
			!this.questions
		) {
			return null;
		}
		return this.questions[this.currentIndex];
	}

	public get hasNext(): boolean {
		return !!this.questions[this.currentIndex + 1];
	}

	public checkAnswer(answer) {
		const isRight = this.questions[this.currentIndex].check(answer);
		if (!isRight) {
			return;
		}
		if (this.hasNext) {
			this.currentIndex++;
		} else {
			this.testing$.successResult = this.successAction;
			this.onSuccess.next(this.successAction);
		}
	}
}
