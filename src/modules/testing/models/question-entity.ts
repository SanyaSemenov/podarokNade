export interface IQuestionEntity {
	question: string;
	rightAnswer: string;
	isHard: boolean;
	variants?: string[];
}

export class QuestionEntity implements IQuestionEntity {
	public question: string;
	public rightAnswer: string;
	public isHard: boolean;
	public variants?: string[];
}
