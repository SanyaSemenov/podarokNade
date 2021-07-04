import { SuccessActionType } from './success-action-type';

export interface SuccessAction {
	id: number;
	type: SuccessActionType;
	title: string;
	target: string;
	img?: string;
}
