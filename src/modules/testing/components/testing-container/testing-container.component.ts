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
			})
		],
		new Date(),
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
}
