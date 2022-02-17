import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgLetModule } from './directives/ng-let/ng-let.module';
import { RootComponent } from './routes/root/root.component';
import { BasicComponent } from './routes/basic/basic.component';
import { FullComponent } from './routes/full/full.component';
import { DealingWithErrorsComponent } from './routes/dealing-with-errors/dealing-with-errors.component';
import { ResetingFormsComponent } from './routes/reseting-forms/reseting-forms.component';
import { DisabledFormsComponent } from './routes/disabled-forms/disabled-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    BasicComponent,
    FullComponent,
    DealingWithErrorsComponent,
    ResetingFormsComponent,
    DisabledFormsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, NgLetModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
