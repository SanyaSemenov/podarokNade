import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { BaseQuestionComponent } from './components/question/base-question.component';
import { TestingContainerComponent } from './components/testing-container/testing-container.component';

@NgModule({
	declarations: [BaseQuestionComponent, TestingContainerComponent],
	imports: [CommonModule, MatButtonModule]
})
export class TestingModule {}
