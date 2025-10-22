import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { UpsertModalComponent } from './upsert-modal-component/upsert-modal-component';
@NgModule({
  declarations: [UpsertModalComponent],  
  imports: [
    CommonModule,
    MatDialogModule  
  ],
  exports: [UpsertModalComponent]  
})
export class ModalModule { }
