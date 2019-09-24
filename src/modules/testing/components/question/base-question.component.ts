import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionEntity } from '../../models';

@Component({
	selector: 'question',
	templateUrl: './base-question.component.html',
	styleUrls: ['./base-question.component.less']
})
export class BaseQuestionComponent implements OnInit {
	constructor() {}

	@Input() public question: QuestionEntity;
	@Output() public onAnswer = new EventEmitter<string>();

	ngOnInit() {}
}
