import { QuestionEntity, IQuestionEntity } from './question-entity';
import { QuestionnaireStatus } from './questionnaire-status';
import { SuccessAction } from './success-action';
import { Subject } from 'rxjs';
import { TestingService } from '../services';

export interface IQuestionnaire {
	id: number;
	title: string;
	questions: IQuestionEntity[];
	date: Date;
	successAction: SuccessAction;
}

export interface IQuestionnaireFull {
	id: number;
	title: string;
	questions: IQuestionEntity[];
	date: Date;
	successAction: SuccessAction;
	status: QuestionnaireStatus;
	currentIndex: number;
	onSuccess: Subject<SuccessAction>;
	currentQuestion: IQuestionEntity;
	hasNext: boolean;
	checkAnswer: (answer: any) => void;
}

export class Questionnaire implements IQuestionnaireFull {
	constructor(obj: IQuestionnaire, public testing$: TestingService) {
		Object.assign(this, obj);
	}
	public id: number;
	public title: string;
	public questions: Array<QuestionEntity>;
	public date: Date;
	public successAction: SuccessAction;

	public status: QuestionnaireStatus = QuestionnaireStatus.Untouched;
	public currentIndex: number = 0;
	public onSuccess = new Subject<SuccessAction>();

	public get currentQuestion(): QuestionEntity {
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
		return (
			this.questions[this.currentIndex] &&
			!!this.questions[this.currentIndex + 1]
		);
	}

	public checkAnswer(answer) {
		const isRight = this.questions[this.currentIndex].check(answer);
		if (!isRight) {
			return;
		}
		if (this.hasNext) {
			this.testing$.status = this.status = QuestionnaireStatus.InProgress;
			this.currentIndex++;
		} else {
			this.testing$.successResult = this.successAction;
			this.testing$.status = this.status = QuestionnaireStatus.Passed;
			this.onSuccess.next(this.successAction);
		}
	}
}
