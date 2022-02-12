import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgLetDirective } from './ng-let.directive';

@NgModule({
  exports: [NgLetDirective],
  declarations: [NgLetDirective],
  imports: [
    CommonModule
  ]
})
export class NgLetModule { }
