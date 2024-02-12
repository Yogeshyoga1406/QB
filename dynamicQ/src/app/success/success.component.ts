import { Component, Inject, ViewChild, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { UpdateComponent } from '../update/update.component';
import {  Observable,Subject } from 'rxjs'

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,private _snackBar: MatSnackBar) { 
    this.message=data.msg
    this.style=data.sty
  }
  message="";
  style:any;
  
  snackBarRef = inject(MatSnackBarRef);

}
