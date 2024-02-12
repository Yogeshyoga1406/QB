import { HttpClient } from '@angular/common/http';
import { Component, Inject ,OnInit} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { UpdateComponent } from '../update/update.component';
import { SuccessComponent } from '../success/success.component';

@Component({
  selector: 'app-demodialog',
  templateUrl: './demodialog.component.html',
  styleUrls: ['./demodialog.component.css']
})
export class DemodialogComponent implements OnInit{

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute,private _snackBar: MatSnackBar,
    private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) data: any,  private dialogRef: MatDialogRef<UpdateComponent>){
      // this.id=this.route.snapshot.params['id'];
      this.id=data.id;
      this.getById(this.id);
      console.log(this.id);
    }
    id!:number;
    product:any;
  
    ngOnInit(): void {
      // this.id=this.route.snapshot.params['id'];
      // this.getById(this.id);
      // console.log(this.id);
    }
    getById(id:number){
      this.http.get('http://localhost:8082/api/product/getById/'+id).subscribe(data=>{
        console.log(data);
        this.product=data;
      })
    }
    message='✔️ Product details updated successfully...!!'
    selectedFile!:File;
    onFileSelected(event: any) {
      
      console.log('file adding event');
      
      const file = event.target.files[0];
      this.selectedFile=file;
      this.product.file=null;
      console.log(this.selectedFile);
      
      
    }
    update(product:any){
      console.log(product);
      if(this.selectedFile==undefined){
        console.log('undefined');
        
        this.http.put('http://localhost:8082/api/product/update1',product, { responseType: 'text' }).subscribe(data=>{
        console.log(data);
        this.dialogRef.close(true);
        this.product.id="";
        this.product.details=[];
        this.sa=true;
        this.router.navigate(['products']);
        this.openSnackBar(this.message, 'ok');
      })
        
      }
      else{
        const formData = new FormData();
      formData.append('file', this.selectedFile);
      // formData.append('p', this.product);
      formData.append('p', new Blob([JSON.stringify(product)], { type: 'application/json' }));
      
      this.http.put('http://localhost:8082/api/product/update2',formData, { responseType: 'text' }).subscribe(data=>{
        console.log(data);
        this.dialogRef.close(true);
        this.product.id="";
        this.product.details=[];
        this.sa=true;
        this.selectedFile;
        this.router.navigate(['products']);
        this.openSnackBar(this.message, 'ok');
      
      })
      }
      
    }
    getImageDataUrl(base64ImageData: string): string {
      return `data:image/png;base64,${base64ImageData}`;
    }
    openSnackBar(message:string, action: string) {
      // this._snackBar.open(message, action, {
      //   duration: 4 * 1000,
      //   verticalPosition: 'bottom', // 'top' | 'bottom'
      //   horizontalPosition: 'center',//'start' | 'center' | 'end' | 'left' | 'right'
      //   panelClass:["red-snackbar"]
      // });
      this._snackBar.openFromComponent(SuccessComponent, {
        data: {msg:message,
               sty:'update-snackbar'},
        duration: 4 * 1000,
        panelClass:["red-snackbar"]
      });
    }
  
    remove(index:number){
      console.log(index);
      this.product.details.splice(index, 1);
      console.log(this.product.details);
      
    }
    field!:string;
    value!:any;
    dtype='String';
    add(){
      let bodyData = {
        field: this.field,
        value: this.value
      }
      this.product.details.push(bodyData);
      console.log(bodyData);
      console.log(this.product.details);
      
      this.field="";
      this.value="";
      this.op1=0;
      this.op2=0;
      this.op3=0;
      this.o1="";
      this.o2="";
    }
    sa=true;
    showAdd(){
      this.sa=false;
    }
    operations= [
      {value: 'add-0', viewValue: '+'},
      {value: 'subtract-1', viewValue: '-'},
      {value: 'multiply-2', viewValue: '*'},
      {value: 'division-2', viewValue: '/'},
    ];
  
    op1!:number;
    op2!:number;
    op3!:number;
    o1="";
    o2="";
    
    doCalc(){
      console.log("calculation part ",this.o1);
      
      if(this.o1!="" && this.o2==""){
        if(this.o1=="+"){
          this.value=this.op1+this.op2;
        }
        else if(this.o1=="-"){
          this.value=this.op1-this.op2;
        }
        else if(this.o1=="*"){
          this.value=this.op1*this.op2;
        }
        else if(this.o1=="/"){
          this.value=this.op1/this.op2;
        }
        else{
          console.log("invalid operation");
        }
      }
      if(this.o1!="" && this.o2!=""){
        if(this.o1=="+" && this.o2=="+"){
          this.value=this.op1+this.op2+this.op3;
        }
        else if(this.o1=="+" && this.o2=="-"){
          this.value=this.op1+this.op2-this.op3;
        }
        else if(this.o1=="+" && this.o2=="*"){
          this.value=this.op1+this.op2*this.op3;
        }
        else if(this.o1=="+" && this.o2=="/"){
          this.value=this.op1+this.op2/this.op3;
        }
        else if(this.o1=="-" && this.o2=="+"){
          this.value=this.op1-this.op2+this.op3;
        }
        else if(this.o1=="-" && this.o2=="-"){
          this.value=this.op1-this.op2-this.op3;
        }
        else if(this.o1=="-" && this.o2=="*"){
          this.value=this.op1-this.op2*this.op3;
        }
        else if(this.o1=="-" && this.o2=="/"){
          this.value=this.op1-this.op2/this.op3;
        }
        else if(this.o1=="*" && this.o2==""){
          this.value=this.op1*this.op2-this.op3;
        }
        else if(this.o1=="*" && this.o2=="+"){
          this.value=this.op1*this.op2+this.op3;
        }
        else if(this.o1=="*" && this.o2=="-"){
          this.value=this.op1*this.op2-this.op3;
        }
        else if(this.o1=="*" && this.o2=="*"){
          this.value=this.op1*this.op2*this.op3;
        }
        else if(this.o1=="*" && this.o2=="/"){
          this.value=this.op1*this.op2/this.op3;
        }
        else if(this.o1=="/" && this.o2==""){
          this.value=this.op1/this.op2-this.op3;
        }
        else if(this.o1=="/" && this.o2=="+"){
          this.value=this.op1/this.op2+this.op3;
        }
        else if(this.o1=="/" && this.o2=="-"){
          this.value=this.op1/this.op2-this.op3;
        }
        else if(this.o1=="/" && this.o2=="*"){
          this.value=this.op1/this.op2*this.op3;
        }
        else if(this.o1=="/" && this.o2=="/"){
          this.value=this.op1/this.op2/this.op3;
        }
        else{
          console.log("invalid operation");
        }
      }
    }
    openDialog(index:number) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data:{
          message: 'Do you want to delete the field from the quotation ?'
      }
      });
       
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
          if (confirmed) {
              this.remove(index);
          }
      });
    } 
    ind!:number;
    editField(index:number){
      this.ind=index;
    }
    editFieldComplete(){
      this.ind=-1;
    }
    extraFieldCalc=false;
    showExtraCalc(){
      this.extraFieldCalc=true;
    }
    back(){
      this.dialogRef.close(true);
      // this.router.navigate(['products']);
    }

}
