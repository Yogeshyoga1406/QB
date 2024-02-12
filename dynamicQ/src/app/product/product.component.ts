import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessComponent } from '../success/success.component';
import { DerivationComponent } from '../derivation/derivation.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productQ:any[]=[];
  favorite!:boolean;
  product:any;
  fieldCount=0;

  field!:string;
  value!:any;

  constructor(private http: HttpClient,private _snackBar: MatSnackBar,private dialog: MatDialog,){
    
    console.log();
  }

  save(){
  
    this.product={
      "details":this.productQ,
      "favorite":false
    }
   
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    // formData.append('p', this.product);
    formData.append('p', new Blob([JSON.stringify(this.product)], { type: 'application/json' }));
    console.log(formData);
    if(this.selectedFile){
      this.http.post('http://localhost:8082/api/product/save2', formData,{ responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);

      this.productQ=[];
      this.fieldCount=0;
      // this.show=true
      this.selectedFile;
      this.dtype="String";
      this.openSnackBar();
      });
    }
    else{
      console.log('no file data');
      
      this.http.post('http://localhost:8082/api/product/save1', this.product,{ responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      this.productQ=[];
      this.fieldCount=0;
      this.openSnackBar();
      });
    }
  }
  
  add(){
    let bodyData = {
      field: this.field,
      value: this.value
    }
    
    this.productQ.push(bodyData);
    console.log(this.productQ);
    
    
    this.fieldCount++;
    this.field="";
    this.value="";

    console.log(this.field+' : '+this.value);
    console.log('Array : '+this.productQ.values);
    
  }
  show=false;
  unShow(){
    this.show=false;
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SuccessComponent, {
      data: {msg:'✔️Product saved successfully....',
             sty:'example-pizza-party'},
      duration: 4 * 1000,
    });
  }

  dtype:string='String';

  selectedFile!:File;
  onFileSelected(event: any) {
    console.log(this.selectedFile);
    const file = event.target.files[0];
    this.selectedFile=file;
    console.log(this.selectedFile);
  }

  startDerive(){
    this.dtype='Number'
    const product={
      "details":this.productQ,
    }
    const dialogRef = this.dialog.open(DerivationComponent,{
      data:product
    });
    dialogRef.afterClosed().subscribe((data?: any) => {
      // console.log(data.flag);
      // if (this.confirmed) {
        
      // }
      if(data){
      this.value=data;
      }
    });
  }

  removeField(index:number){
    this.productQ.splice(index, 1);
  }
  
}
