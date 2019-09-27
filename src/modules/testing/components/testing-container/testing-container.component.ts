import { Component, OnInit } from '@angular/core';
import { TestingService } from '../../services';
import { Questionnaire, QuestionEntity, SuccessActionType, QuestionnaireStatus, SuccessAction } from '../../models';
import { IQuestionnaire, IQuestionnaireFull } from '../../models/questionnaire';
import { takeUntil } from 'rxjs/operators';
import { Unsubscriber } from 'src/lib/unsubscribe';

@Component({
	selector: 'app-testing-container',
	templateUrl: './testing-container.component.html',
	styleUrls: ['./testing-container.component.less']
})
export class TestingContainerComponent extends Unsubscriber implements OnInit {
	constructor(private testing$: TestingService) {
		super();
	}
	public questionnaire: IQuestionnaireFull;
	public answer: string;
	public isTestHidden: boolean = false;

	ngOnInit() {
		this.initTest();
	}

	private initTest() {
		this.questionnaire = this.testing$.currentQuestionnaire;
		this.isTestHidden = this.testing$.status === QuestionnaireStatus.Passed;
		if (!this.isTestHidden) {
			this.questionnaire.onSuccess
				.pipe(takeUntil(this.ngUnsubscribe))
				.subscribe((successAction: SuccessAction) => {
					this.isTestHidden = true;
				});
		}
	}

	public setAnswer(value: string) {
		this.answer = value;
	}

	public checkAnswer() {
		if (!this.questionnaire) {
			return;
		}
		this.questionnaire.checkAnswer(this.answer);
		this.answer = null;
	}
}
