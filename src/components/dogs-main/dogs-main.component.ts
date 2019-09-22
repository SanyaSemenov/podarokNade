import { Component, OnInit } from '@angular/core';
import { FramesComponent, PopupFrame } from 'src/lib/frames';

const hello = 'Привет, Надя!<br>Мы так рады тебя видеть!';
const congrads = 'Поздравляем тебя с прошедшим Днем Рождения!';
const sashaCongrads =
	'Саша тоже поздравляет тебя и искренне желает тебе счастья!';
const sashaHopes =
	'Он старался и очень надеется, что тебе понравится его подарок ;)';
const best =
	'Ты наш самый любимый человек, и Саша тебя просто обожает';

@Component({
	selector: 'dogs-main',
	templateUrl: './dogs-main.component.html',
	styleUrls: ['./dogs-main.component.less']
})
export class DogsMainComponent extends FramesComponent implements OnInit {
	constructor() {
		super([
			new PopupFrame(false, false, 5000),
			new PopupFrame(false, true, 2000),
			new PopupFrame(true, true, 5000, hello),
			new PopupFrame(false, true, 1000, hello),
			new PopupFrame(true, true, 5000, congrads),
			new PopupFrame(false, true, 1000, congrads),
			new PopupFrame(true, true, 5000, sashaCongrads),
			new PopupFrame(false, true, 1000, sashaCongrads),
			new PopupFrame(true, true, 5000, sashaHopes),
			new PopupFrame(false, true, 1000, sashaHopes),
			new PopupFrame(true, true, 5000, best)
		]);
	}



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

	ngOnInit() {
		super.ngOnInit();
	}
}
