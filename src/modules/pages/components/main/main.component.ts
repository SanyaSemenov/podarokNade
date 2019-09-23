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
		new PopupFrame(false, false, 5000),
		new PopupFrame(false, true, 2000, hello),
		new PopupFrame(true, true, 5000, hello),
		new PopupFrame(false, true, 1000, hello),
		new PopupFrame(true, true, 5000, congrads),
		new PopupFrame(false, true, 1000, congrads),
		new PopupFrame(true, true, 5000, sashaCongrads),
		new PopupFrame(false, true, 1000, sashaCongrads),
		new PopupFrame(true, true, 5000, sashaHopes),
		new PopupFrame(false, true, 1000, sashaHopes),
		new PopupFrame(true, true, 1000, best)
	]);

	public isSashaMobile: boolean = false;
	private readonly sashaText = 'Любить сюда';
	public sashaFrames: PopupFramesCollection = new PopupFramesCollection([
		new PopupFrame(false, false, 19000),
		new PopupFrame(false, true, 1000, this.sashaText),
		new PopupFrame(true, true, 5000, this.sashaText),
		new PopupFrame(false, true, 1000, this.sashaText),
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
