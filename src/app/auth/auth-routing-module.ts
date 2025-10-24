import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { CadastroComponent } from './cadastro-component/cadastro-component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent, 
  },
  {
    path: 'cadastro',
    component: CadastroComponent, 
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
