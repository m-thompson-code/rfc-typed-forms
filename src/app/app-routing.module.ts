import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './routes/basic/basic.component';
import { DealingWithErrorsComponent } from './routes/dealing-with-errors/dealing-with-errors.component';
import { DisabledFormsComponent } from './routes/disabled-forms/disabled-forms.component';
import { DynamicControlsComponent } from './routes/dynamic-controls/dynamic-controls.component';
import { FormBuilderComponent } from './routes/form-builder/form-builder.component';
import { FullComponent } from './routes/full/full.component';
import { ResetingFormsComponent } from './routes/reseting-forms/reseting-forms.component';
import { RootComponent } from './routes/root/root.component';

const routes: Routes = [
    { path: '', component: RootComponent },
    { path: 'basic', component: BasicComponent },
    { path: 'form-builder', component: FormBuilderComponent },
    { path: 'dealing-with-errors', component: DealingWithErrorsComponent },
    { path: 'reseting-forms', component: ResetingFormsComponent },
    { path: 'disabled-forms', component: DisabledFormsComponent },
    { path: 'dynamic-controls', component: DynamicControlsComponent },
    { path: 'full', component: FullComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
