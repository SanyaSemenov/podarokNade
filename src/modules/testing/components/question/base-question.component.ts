import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionEntity } from '../../models';

@Component({
	selector: 'question',
	templateUrl: './base-question.component.html',
	styleUrls: ['./base-question.component.less']
})
export class BaseQuestionComponent implements OnInit {
	constructor() {}

	@Input() public set question(value: QuestionEntity) {
		if (this.question) {
			this.isQuestionAnswered = true;
		}
		// this._question = value;
		this.isQuestionSet = false;
		this.setTimer(value);
	}
	public get question(): QuestionEntity {
		return this._question;
	}
	@Output() public onAnswer = new EventEmitter<string>();
	@Output() public onCheck = new EventEmitter<void>();

	public answer: string;
	private _question: QuestionEntity;
	private timer: any;
	private openTimer: any;
	public isQuestionSet: boolean = false;
	public isQuestionAnswered: boolean = false;

	ngOnInit() {}

	public check() {
		this.answer = null;
		this.onCheck.emit();
	}

	private setTimer(question: QuestionEntity) {
		if (this.timer) {
			return;
		}
		this.timer = setTimeout(() => {
			this.isQuestionAnswered = false;
			clearTimeout(this.timer);
			this.timer = null;
			this.setOpenTimer(question);
		}, 500);
	}

	private setOpenTimer(question: QuestionEntity) {
		if (this.openTimer) {
			return;
		}
		this._question = question;
		this.openTimer = setTimeout(() => {
			this.isQuestionSet = true;
			clearTimeout(this.openTimer);
			this.openTimer = null;
		}, 500);
	}
}
