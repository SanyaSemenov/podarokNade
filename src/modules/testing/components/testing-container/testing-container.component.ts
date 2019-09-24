import { Component, OnInit } from '@angular/core';
import { TestingService } from '../../services';
import { Questionnaire, QuestionEntity, SuccessActionType, QuestionnaireStatus } from '../../models';
import { IQuestionnaire, IQuestionnaireFull } from '../../models/questionnaire';

declare function require(url: string);

@Component({
	selector: 'app-testing-container',
	templateUrl: './testing-container.component.html',
	styleUrls: ['./testing-container.component.less']
})
export class TestingContainerComponent implements OnInit {
	constructor(private testing$: TestingService) {}

	public questionnaire: IQuestionnaireFull = new Questionnaire(
		{
			id: 1,
			title: 'Title',
			questions: [
				new QuestionEntity({
					question: 'How was your day?',
					rightAnswer: 'Nice',
					img: 'https://sun9-48.userapi.com/c855216/v855216133/fc076/_J7IrFY0Hww.jpg',
					variants: ['Nice', 'Awful']
				}),
				new QuestionEntity({
					question: 'How was your day[2]?',
					rightAnswer: 'Nice',
					img: 'https://sun9-48.userapi.com/c855216/v855216133/fc076/_J7IrFY0Hww.jpg',
					variants: ['Nice', 'Awful']
				})
			],
			date: new Date(new Date().getTime() - 1000 * 60 * 60),
			successAction: {
				title: 'Congradulations!',
				type: SuccessActionType.Text,
				target: 'You have successfully passed the test!'
			}
		},
		this.testing$
	);
	public answer: string;

	ngOnInit() {
		// console.log(JSON.stringify(this.questionnaire, null, 4));
		this.initTest();
	}

	private initTest() {
		const status = this.testing$.status;
		const id = this.testing$.id;
		console.log(require('../../data/questionnaire1.json'));
		// if (status === QuestionnaireStatus.InProgress) {
		// 	console.log(require('../../data/questionnaire1.json'));
		// }
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
