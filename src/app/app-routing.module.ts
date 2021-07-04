import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: '',
		loadChildren: '../modules/pages/pages.module#PagesModule'
	},
	{
		path: 'testing',
		loadChildren: '../modules/testing/testing.module#TestingModule'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
