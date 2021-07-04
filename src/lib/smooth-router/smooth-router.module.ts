import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmoothRouterDirective } from './smooth-router.directive';
import { SmoothRouterService } from './smooth-router.service';

@NgModule({
	declarations: [SmoothRouterDirective],
	imports: [CommonModule],
	providers: [SmoothRouterService]
})
export class SmoothRouterModule {}
