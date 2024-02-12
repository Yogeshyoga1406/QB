import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
  message: string = "Are you sure want to delete?"
  confirmButtonText = "Add"
  cancelButtonText = "Finish"
  constructor(@Inject(MAT_DIALOG_DATA) data: any, private dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
      if(data){
          this.message = data.message || this.message;
          if (data.buttonText) {
              this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
              this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
          }
      }
  }
  
  onConfirmClick(): void {
      this.dialogRef.close(true);
  }
}
