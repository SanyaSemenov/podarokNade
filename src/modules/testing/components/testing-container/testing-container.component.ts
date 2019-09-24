import { Component, OnInit } from '@angular/core';
import { TestingService } from '../../services';
import { Questionnaire, QuestionEntity, SuccessActionType } from '../../models';

@Component({
	selector: 'app-testing-container',
	templateUrl: './testing-container.component.html',
	styleUrls: ['./testing-container.component.less']
})
export class TestingContainerComponent implements OnInit {
	constructor(private testing$: TestingService) {}

	public questionnaire: Questionnaire = new Questionnaire(
		[
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
		new Date(new Date().getTime() - 1000 * 60 * 60),
		{
			title: 'Congradulations!',
			type: SuccessActionType.Text,
			target: 'You have successfully passed the test!'
		},
		this.testing$
	);
	public answer: string;

	ngOnInit() {}

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
