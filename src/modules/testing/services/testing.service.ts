import { Injectable } from '@angular/core';
import { SuccessAction, QuestionnaireStatus } from '../models';

@Injectable()
export class TestingService {
	constructor() {}

	private readonly _success_action_key = '_success_action_key';
	private readonly _questionnaire_index_key = '_questionnaire_index_key';
	private readonly _questionnaire_last_date = '_questionnaire_last_date';
	private readonly _questionnaire_status = '_questionnaire_status';

	public set successResult(action: SuccessAction) {
		this.setItem(this._success_action_key, JSON.stringify(action));
	}

	public get successResult(): SuccessAction {
		const fromStorage = this.getItem(this._success_action_key);
		return JSON.parse(fromStorage) as SuccessAction;
	}

	public set id(value: number) {
		this.setItem(this._questionnaire_index_key, value.toString());
	}

	public get id(): number {
		const fromStorage = this.getItem(this._questionnaire_index_key);
		return fromStorage && +fromStorage ? +fromStorage : 0;
	}

	public set questionnaireDate(value: Date) {
		this.setItem(this._questionnaire_last_date, value.toISOString());
	}

	public get questionnaireDate(): Date {
		const fromStorage = this.getItem(this._questionnaire_last_date);
		return fromStorage ? new Date(fromStorage) : new Date();
	}

	public set status(value: QuestionnaireStatus) {
		this.setItem(this._questionnaire_status, value.toString());
	}

	public get status(): QuestionnaireStatus {
		const fromStorage = this.getItem(this._questionnaire_status);
		return fromStorage ? fromStorage as QuestionnaireStatus : QuestionnaireStatus.Untouched;
	}

	private setItem(key: string, value: string) {
		localStorage.setItem(key, value);
	}

	private getItem(key: string): string {
		return localStorage.getItem(key);
	}
}
