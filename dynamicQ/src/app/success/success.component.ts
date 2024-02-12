import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { UpdateComponent } from '../update/update.component';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { 
    this.message=data.msg
    this.style=data.sty
  }
  message="";
  style:any;
  
  snackBarRef = inject(MatSnackBarRef);
 
}
