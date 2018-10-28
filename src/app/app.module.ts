import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgDragDropModule } from 'ng-drag-drop';

import { AppComponent } from './app.component';
import { SelectOperatorComponent } from './select-operator/select-operator.component';
import { DisplayExpressionComponent } from './display-expression/display-expression.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectOperatorComponent,
    DisplayExpressionComponent
  ],
  imports: [
    BrowserModule,
    NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
