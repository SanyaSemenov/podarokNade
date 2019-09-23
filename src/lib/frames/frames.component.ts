import { OnInit } from '@angular/core';
import { PopupFramesCollection } from './models';

export class FramesComponent implements OnInit {
	constructor() { }

	public framesCollection: PopupFramesCollection;
	public ngOnInit() {
		this.framesCollection.init();
	}
}
