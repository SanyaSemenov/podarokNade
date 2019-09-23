import { Component, OnInit, Input } from '@angular/core';
import { PopupFrame, FramesComponent } from 'src/lib/frames';

@Component({
	selector: 'sasha-main',
	templateUrl: './sasha-main.component.html',
	styleUrls: ['./sasha-main.component.less']
})
export class SashaMainComponent extends FramesComponent implements OnInit {
	constructor() {
		super();
	}

	@Input() public frames: PopupFrame[];
	@Input() public isMobile: boolean = false;

	ngOnInit() {
		super.ngOnInit();
	}
}
