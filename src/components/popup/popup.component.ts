import { Component, Input } from '@angular/core';
import { PopupAlign } from './popup-align';

@Component({
	selector: 'popup',
	templateUrl: './popup.component.html',
	styleUrls: ['./popup.component.less']
})
export class PopupComponent {
	constructor() {}

	@Input() public isVisible: boolean = false;
	@Input() public text: string;
	@Input() public alignment: PopupAlign = PopupAlign.Top;
	@Input() public isUpsideDown: boolean = false;
}
