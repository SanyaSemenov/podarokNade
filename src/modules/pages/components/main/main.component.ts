import { Component, OnInit } from '@angular/core';
import { PopupFrame } from 'src/lib/frames';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor() { }

//   private readonly hello = 'Привет, Надя!<br>Мы так рады тебя видеть!';
//   private readonly congrads = 'Поздравляем тебя с прошедшим Днем Рождения!';
//   private readonly sashaCongrads = 'Саша тоже поздравляет тебя и искренне желает тебе счастья!';
//   private readonly sashaHopes = 'Он старался и очень надеется, что тебе понравится его подарок ;)';
//   private readonly best = 'Ты наш самый любимый человек, и Саша тебя просто обожает';

//   public frames: PopupFrame[] = [
// 	  new PopupFrame(false, false, 5000),
// 	  new PopupFrame(false, true, 2000),
// 	  new PopupFrame(true, true, 5000, this.hello),
// 	  new PopupFrame(false, true, 1000, this.hello),
// 	  new PopupFrame(true, true, 5000, this.congrads),
// 	  new PopupFrame(false, true, 1000, this.congrads),
// 	  new PopupFrame(true, true, 5000, this.sashaCongrads),
// 	  new PopupFrame(false, true, 1000, this.sashaCongrads),
// 	  new PopupFrame(true, true, 5000, this.sashaHopes),
// 	  new PopupFrame(false, true, 1000, this.sashaHopes),
// 	  new PopupFrame(true, true, 1000, this.best),
//   ];

//   private _currentIndex: number = 0;

//   public set currentIndex(value: number) {
// 	  this._currentIndex = value;
// 	  this.switchFrame();
//   }
//   public get currentIndex(): number {
// 	  return this._currentIndex;
//   }

  public ngOnInit() {
	//   this.switchFrame();
  }

//   private switchFrame() {
// 	  if (!this.frames[this._currentIndex + 1]) {
// 		  return;
// 	  }
// 	  const interval = this.frames[this._currentIndex].nextFrameInterval;
// 	  setTimeout(() => this.currentIndex++, interval);
//   }

}
