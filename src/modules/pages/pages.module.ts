import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/components';

const routes: Routes = [
	{
		path: '',
		component: MainComponent
	}
];

@NgModule({
  declarations: [MainComponent],
  imports: [
	CommonModule,
	RouterModule.forChild(routes),
	ComponentsModule
  ]
})
export class PagesModule { }
