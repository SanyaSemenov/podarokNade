import { PopupFrame } from './popup-frame';

export class PopupFramesCollection {
	constructor(frames: PopupFrame[]) {
		this.frames = frames;
	}
	public frames: PopupFrame[];

	private _currentIndex: number = 0;
	public set currentIndex(value: number) {
		this._currentIndex = value;
		this.switchFrame();
	}
	public get currentIndex(): number {
		return this._currentIndex;
	}

	public get currentFrame(): PopupFrame {
		if (!this.frames) {
			return null;
		}
		return this.frames[this.currentIndex];
	}

	public init() {
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
