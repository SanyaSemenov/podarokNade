import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingModule } from 'src/modules';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, TestingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
