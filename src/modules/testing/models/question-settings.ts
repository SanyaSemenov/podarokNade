import { Type } from '@angular/core';

export class QuestionSettings {
	constructor(component: Type<any>) {
		this.component = component;
	}
	public component: Type<any>;
}
