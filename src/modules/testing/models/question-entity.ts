export interface IQuestionEntity {
	question: string;
	rightAnswer: string;
	img?: string;
	isHard?: boolean;
	variants?: string[];
}

export class QuestionEntity implements IQuestionEntity {
	constructor(obj: IQuestionEntity) {
		Object.assign(this, obj);
	}
	public question: string;
	public rightAnswer: string;
	public img?: string;
	public isHard?: boolean;
	public variants?: string[];

	public isRight: boolean = false;
	public isTouched: boolean = false;

	public check(answer): boolean {
		this.isRight = this.rightAnswer ? this.rightAnswer === answer : true;
		this.markTouched();
		return this.isRight;
	}

	private markTouched() {
		this.isTouched = true;
	}
}
