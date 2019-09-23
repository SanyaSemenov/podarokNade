import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class Unsubscriber implements OnDestroy {
	constructor() {}

	public ngUnsubscribe = new Subject<void>();
	public ngOnDestroy() {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
}
