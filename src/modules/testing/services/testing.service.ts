import { Injectable } from '@angular/core';
import { SuccessAction } from '../models';

@Injectable()
export class TestingService {
	constructor() {}

	private readonly _success_action_key = '_success_action_key';
	private readonly _questionnaire_index_key = '_questionnaire_index_key';
	private readonly _questionnaire_last_date = '_questionnaire_last_date';

	public set successResult(action: SuccessAction) {
		this.setItem(this._success_action_key, JSON.stringify(action));
	}

	public get successResult(): SuccessAction {
		const fromStorage = this.getItem(this._success_action_key);
		return JSON.parse(fromStorage) as SuccessAction;
	}

	public set index(value: number) {
		this.setItem(this._questionnaire_index_key, value.toString());
	}

	public get index(): number {
		const fromStorage = this.getItem(this._questionnaire_index_key);
		return fromStorage && +fromStorage ? +fromStorage : 0;
	}

	public set questionnaireDate(value: Date) {
		this.setItem(this._questionnaire_index_key, value.toString());
	}

	private setItem(key: string, value: string) {
		localStorage.setItem(key, value);
	}

	private getItem(key: string): string {
		return localStorage.getItem(key);
	}
}
