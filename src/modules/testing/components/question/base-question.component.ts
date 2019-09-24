import { Component, OnInit, Input } from '@angular/core';
import { QuestionEntity } from '../../models';

@Component({
	selector: 'question',
	templateUrl: './base-question.component.html',
	styleUrls: ['./base-question.component.less']
})
export class BaseQuestionComponent implements OnInit {
	constructor() {}

	@Input() public question: QuestionEntity;

	ngOnInit() {}

	public onChange(event) {
		console.log(event);
	}
}
