import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-derivation',
  templateUrl: './derivation.component.html',
  styleUrls: ['./derivation.component.css']
})
export class DerivationComponent {
    constructor(private http:HttpClient,@Inject(MAT_DIALOG_DATA) data: any,private dialogRef: MatDialogRef<DerivationComponent>){
      if(data.id!=null){
      const id=data.id
      this.getById(id)
      }
      else{
        this.product=data;
      }
    }

    field!:string;
    value!:any;
    product:any;
    sa=true;

    getById(id:number){
      this.http.get('http://localhost:8082/api/product/getById/'+id).subscribe(data=>{
        console.log(data);
        this.product=data;
      })
    }
    
    
    isNumber(value: any): boolean {
      const var1=parseInt(value);
      if(typeof var1 === 'number' && !isNaN(var1)){
        this.numCount++;
      }
      return typeof var1 === 'number' && !isNaN(var1);
    }

    back(){
      // let data = {
      //   flag: true,
      //   num: this.value
      // }
      this.dialogRef.close(this.value); 
    }
    input:string='';
    addInputValue(val:any){
      this.input=this.input+val;
      console.log(this.input);
      
    }
    addInputAction(action:string){
      this.input=this.input+action;
      console.log(this.input);
    }

    derive(){
      this.value=eval(this.input);
      console.log(this.value);
    }
    removeInput(){
      if(this.input!=''){
        this.input=this.input.slice(0, -1);
      }
      if(this.input.length<1){
        this.value=null;
      }
    }
    closeDialogBox(){
      this.dialogRef.close();
    }
    numCount!:number;

}
