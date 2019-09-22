import { Component, OnInit } from '@angular/core';
import { PopupFrame } from './models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor() { }

  private readonly hello = 'Привет, Надя!<br>Мы так рады тебя видеть!';
  private readonly congrads = 'Поздравляем тебя с прошедшим Днем Рождения!'

  public frames: PopupFrame[] = [
	  new PopupFrame(false, false, 5000),
	  new PopupFrame(false, true, 2000),
	  new PopupFrame(true, true, 5000, this.hello),
	  new PopupFrame(false, true, 1000, this.hello),
	  new PopupFrame(true, true, 1000, this.congrads)
  ];

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
