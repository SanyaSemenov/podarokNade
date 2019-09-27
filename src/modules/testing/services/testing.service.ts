import { Injectable } from '@angular/core';
import { SuccessAction, QuestionnaireStatus, QuestionEntity } from '../models';
import { Questionnaire, IQuestionnaire } from '../models/questionnaire';

declare function require(url: string);

@Injectable()
export class TestingService {
	constructor() {}

	private readonly _success_action_key = '_success_action_key';
	private readonly _questionnaire_index_key = '_questionnaire_index_key';
	private readonly _questionnaire_last_date = '_questionnaire_last_date';
	private readonly _questionnaire_status = '_questionnaire_status';

	private readonly dayMilliseconds = 8640000;

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
		return fromStorage && +fromStorage ? +fromStorage : 1;
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
		return fromStorage
			? (fromStorage as QuestionnaireStatus)
			: QuestionnaireStatus.Untouched;
	}

	// TODO: handle null
	public get currentQuestionnaire(): Questionnaire {
		const status = this.status;
		const date = this.questionnaireDate;

		if (!status) {
			const questionnaire = this.getData(1);
			return this.processDataIntoQuestionnaire(questionnaire);
		}

		switch (status) {
			case QuestionnaireStatus.InProgress:
			case QuestionnaireStatus.Untouched:
				return this.processDataIntoQuestionnaire(this.getData(this.id));
			case QuestionnaireStatus.Passed:
				const now = new Date();
				// const nextDate = new Date(new Date(now.getFullYear(), now.getMonth(), now.getDate()).setDate(now.getDate() + 1));
				const next = +(now > date);
				return this.processDataIntoQuestionnaire(this.getData(this.id + next));
		}
	}

	public set currentQuestionnaire(questionnaire: Questionnaire) {
		this.status = questionnaire.status;
		this.id = questionnaire.id;
		this.questionnaireDate = questionnaire.date;
	}

	private getData(id: number): IQuestionnaire {
		let data: IQuestionnaire;
		try {
			data = require(`../data/questionnaire${id}.json`);
		} catch (e) {
			data = null;
		}
		return data;
		// return require(`../data/questionnaire${id}.json`);
		// // TODO: handle unexisting files;
		// // TODO: handle passed
	}

	private processDataIntoQuestionnaire(data: IQuestionnaire): Questionnaire {
		if (!data || new Date(data.date) > new Date()) {
			return null;
		}
		const q: Questionnaire = new Questionnaire(
			{
				id: data.id,
				title: data.title,
				date: new Date(data.date),
				successAction: data.successAction,
				questions: data.questions.map(x => new QuestionEntity(x))
			},
			this
		);
		this.currentQuestionnaire = q;

		return q;
	}

	private setItem(key: string, value: string) {
		localStorage.setItem(key, value);
	}

	private getItem(key: string): string {
		return localStorage.getItem(key);
	}
}
