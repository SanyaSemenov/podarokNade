import { Component, OnInit } from '@angular/core';
import { PopupFrame } from './popup-frame';

export class FramesComponent implements OnInit {
	constructor() { }

	public frames: PopupFrame[];
	private _currentIndex: number = 0;
	public set currentIndex(value: number) {
		this._currentIndex = value;
		this.switchFrame();
	}
	public get currentIndex(): number {
		return this._currentIndex;
	}

	public ngOnInit() {
		this.switchFrame();
	}

	private switchFrame() {
		if (!this.frames[this._currentIndex + 1]) {
			return;
		}
		const interval = this.frames[this._currentIndex].nextFrameInterval;
		setTimeout(() => this.currentIndex++, interval);
	}
}
