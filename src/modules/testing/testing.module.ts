import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { BaseQuestionComponent } from './components/question/base-question.component';
import { TestingContainerComponent } from './components/testing-container/testing-container.component';
import { Routes, RouterModule } from '@angular/router';
import { SuccessTestComponent } from './components/success-test/success-test.component';
import { TestingService } from './services';

const routes: Routes = [
	{
		path: '',
		component: TestingContainerComponent
	},
	{
		path: 'success',
		component: SuccessTestComponent
		// TODO: guard to block
	}
];

@NgModule({
	declarations: [
		BaseQuestionComponent,
		TestingContainerComponent,
		SuccessTestComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatButtonModule,
		MatCardModule,
		MatRadioModule
	],
	providers: [TestingService]
})
export class TestingModule {}
