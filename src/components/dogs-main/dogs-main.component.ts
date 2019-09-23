import { Component, OnInit, Input } from '@angular/core';
import { FramesComponent, PopupFrame } from 'src/lib/frames';

@Component({
	selector: 'dogs-main',
	templateUrl: './dogs-main.component.html',
	styleUrls: ['./dogs-main.component.less']
})
export class DogsMainComponent extends FramesComponent implements OnInit {
	constructor() {
		super();
	}

	@Input() public frames: PopupFrame[];

	ngOnInit() {
		super.ngOnInit();
	}
}
