import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListModule } from './tasks/tasks.module';
import { CalendarModule } from './calendar/calendar.module';
import { GlobalErrorHandler } from './GlobalErrorHandler';
import { ErrorHandler } from "@angular/core";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskListModule,
    CalendarModule
  ],
  providers: [{provide: ErrorHandler, useClass : GlobalErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }