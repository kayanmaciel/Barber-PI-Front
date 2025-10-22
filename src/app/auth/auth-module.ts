import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginComponent } from './login-component/login-component';
import { CadastroComponent } from './cadastro-component/cadastro-component';
import { ModalModule } from '../shared/modal/modal-module';

@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ModalModule
  ],
  exports: [LoginComponent, CadastroComponent]
})
export class AuthModule { }
