import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsMainComponent } from './dogs-main/dogs-main.component';
import { FramesModule } from 'src/lib/frames';

const components = [
	DogsMainComponent
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
