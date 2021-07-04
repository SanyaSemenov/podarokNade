import { Component, OnInit } from '@angular/core';
import { TestingService } from '../../services';
import { SuccessAction } from '../../models';

@Component({
	selector: 'success-test',
	templateUrl: './success-test.component.html',
	styleUrls: ['./success-test.component.less']
})
export class SuccessTestComponent implements OnInit {
	constructor(private testing$: TestingService) {
		this.successAction = this.testing$.successResult;
		this.setTimer();
	}

	public successAction: SuccessAction;
	public timer: any;
	public isSuccessSet: boolean = false;

	ngOnInit() {}

	private setTimer() {
		if (this.timer) {
			return;
		}
		this.timer = setTimeout(() => {
			this.isSuccessSet = true;
			clearTimeout(this.timer);
			this.timer = null;
		}, 500);
	}
}
