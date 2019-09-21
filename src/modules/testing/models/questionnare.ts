import { QuestionEntity } from './question-entity';
import { QuestionnareStatus } from './questionnare-status';

export class Questionarre {
	constructor() {}
	public questions: Array<QuestionEntity>;
	public date: Date;
	public status: QuestionnareStatus = QuestionnareStatus.Untouched;
}
