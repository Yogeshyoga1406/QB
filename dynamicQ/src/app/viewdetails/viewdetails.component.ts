import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent {

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute,@Inject(MAT_DIALOG_DATA) data: any, private dialogRef: MatDialogRef<ViewdetailsComponent>){
    // this.id=this.route.snapshot.params['id'];
    this.id=data.id
    this.getById(this.id);
    console.log(this.id);
    
  }
  id!:number;
  product:any;

  getById(id:number){
    this.http.get('http://localhost:8082/api/product/getById/'+id).subscribe(data=>{
      console.log(data);
      this.product=data;
    })
  }
  back(){
    this.router.navigate(['products']);
    this.dialogRef.close(true);
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
}
getImageDataUrl(base64ImageData: string): string {
  return `data:image/png;base64,${base64ImageData}`;
}
}
