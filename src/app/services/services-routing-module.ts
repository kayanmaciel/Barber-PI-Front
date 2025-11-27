import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesFormComponent } from './services-form-component/services-form-component';

const routes: Routes = [
  {
    path: 'new',
    component: ServicesFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
