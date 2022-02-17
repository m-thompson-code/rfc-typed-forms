import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './routes/basic/basic.component';
import { FullComponent } from './routes/full/full.component';
import { RootComponent } from './routes/root/root.component';

const routes: Routes = [
  { path: '', component: RootComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'full', component: FullComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
