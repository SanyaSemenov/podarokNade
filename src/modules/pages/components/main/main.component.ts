import { Component, OnInit } from '@angular/core';
import { PopupFrame, PopupFramesCollection } from 'src/lib/frames';
import { fromEvent } from 'rxjs';
import { takeUntil, throttleTime } from 'rxjs/operators';
import { Unsubscriber } from 'src/lib/unsubscribe';

const hello = 'Привет, Надя!<br>Мы так рады тебя видеть!';
const congrads = 'Поздравляем тебя с прошедшим Днем Рождения!';
const sashaCongrads =
	'Саша тоже поздравляет тебя и искренне желает тебе счастья!';
const sashaHopes =
	'Он старался и очень надеется, что тебе понравится его подарок ;)';
const best = 'Ты наш самый любимый человек, и Саша тебя просто обожает';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.less']
})
export class MainComponent extends Unsubscriber implements OnInit {
	constructor() {
		super();
	}

	public dogsFrames: PopupFramesCollection = new PopupFramesCollection([
		new PopupFrame(false, false, 100),
		new PopupFrame(false, false, 400),
		new PopupFrame(false, true, 200, hello),
		new PopupFrame(true, true, 500, hello),
		new PopupFrame(false, true, 100, hello),
		new PopupFrame(true, true, 500, congrads),
		new PopupFrame(false, true, 100, congrads),
		new PopupFrame(true, true, 500, sashaCongrads),
		new PopupFrame(false, true, 100, sashaCongrads),
		new PopupFrame(true, true, 500, sashaHopes),
		new PopupFrame(false, true, 100, sashaHopes),
		new PopupFrame(true, true, 100, best)
	]);

	public isSashaMobile: boolean = false;
	private readonly sashaText = 'Любить сюда';
	public sashaFrames: PopupFramesCollection = new PopupFramesCollection([
		new PopupFrame(false, false, 1900),
		new PopupFrame(false, true, 100, this.sashaText),
		new PopupFrame(true, true, 500, this.sashaText),
		new PopupFrame(false, true, 100, this.sashaText),
		new PopupFrame(false, false, 0)
	]);

	public ngOnInit() {
		//   this.switchFrame();
		this.isSashaMobile = window.innerWidth < 641;
		fromEvent(window, 'resize')
			.pipe(takeUntil(this.ngUnsubscribe), throttleTime(300))
			.subscribe(event => {
				this.isSashaMobile = (event.target as Window).innerWidth < 641;
			});
	}
}
