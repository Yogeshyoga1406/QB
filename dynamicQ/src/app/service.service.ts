import { Injectable } from '@angular/core';
import { SuccessComponent } from './success/success.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _snackBar: MatSnackBar) {

   }
   openSnackBar(message:string, action: string) {
    
    this._snackBar.openFromComponent(SuccessComponent, {
      data: {msg:message,
      sty:action},
      duration: 4 * 1000,
    });
  }
  openDeleteSnackBar(message:string, action: string) {
    
    this._snackBar.openFromComponent(SuccessComponent, {
      data: {msg:message,
      sty:action},
      duration: 4 * 1000,
    });
  }
  

  // openSnackBar(message:string, action: string) {
  //   // this._snackBar.open(message, action, {
  //   //   duration: 3 * 1000,
  //   //   verticalPosition: 'bottom', // 'top' | 'bottom'
  //   //   horizontalPosition: 'center',//'start' | 'center' | 'end' | 'left' | 'right'
  //   //   panelClass:["red-snackbar"]
  //   // });
  //   this._snackBar.openFromComponent(SuccessComponent, {
  //     data: {msg:message,
  //     sty:action},
  //     duration: 4 * 1000,
  //   });
  // }
}
