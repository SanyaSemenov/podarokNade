import { SuccessActionType } from './success-action-type';

export interface SuccessAction {
	type: SuccessActionType;
	title: string;
	target: string;
	img?: string;
}
