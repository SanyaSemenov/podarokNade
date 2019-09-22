import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsMainComponent } from './dogs-main/dogs-main.component';
import { FramesModule } from 'src/lib/frames';
import { PopupComponent } from './popup/popup.component';

const components = [
	DogsMainComponent,
	PopupComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
	CommonModule,
	FramesModule
  ]
})
export class ComponentsModule { }
