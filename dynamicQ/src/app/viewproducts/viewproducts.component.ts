import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdateComponent } from '../update/update.component';
import { ViewdetailsComponent } from '../viewdetails/viewdetails.component';
import { AboutComponent } from '../about/about.component';
import { SuccessComponent } from '../success/success.component';
import { ServiceService } from '../service.service';
import { DemoviewComponent } from '../demoview/demoview.component';
import { DemoUpdateComponent } from '../demo-update/demo-update.component';
import { ViewDetailsComponent } from '../view-details/view-details.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit{

  products:any[]=[];
  constructor(private http: HttpClient, private router :Router, private dialog: MatDialog,
     private _snackBar: MatSnackBar,private service:ServiceService){

  }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts():any {
    this.http.get('http://localhost:8082/api/product/getAll').subscribe((resultData: any) => {
      console.log(resultData);
      this.products = resultData;

    })
  }
  delete(id:number){
    console.log('http://localhost:8082/api/product/delete/'+id);
    this.http.delete('http://localhost:8082/api/product/delete/'+id, { responseType: 'text' }).subscribe((data:any)=>{
      console.log(data);
      this.getAllProducts();
      this.service.openSnackBar("Product deleted sucessfully...", 'delete-snackbar');
    })
  }
  update(pid:number){
    // this.router.navigate(['update',id]);
    const dialogRef = this.dialog.open(DemoUpdateComponent,{
      height:"500px",
      data:{
          id:pid
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.getAllProducts()
        // this.router.navigate(['products']);
      }
    });
  }
  view(pid:number){
    // this.router.navigate(['view',pid]);
    const dialogRef = this.dialog.open(ViewDetailsComponent,{
      data:{
          id:pid
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        // this.router.navigate(['products']);
      }
    });
  }
  openDialog(id:number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
    data:{
        message: 'Do you want to delete the product quotation details?'
    }
    });
     
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
            this.delete(id);
        }
    });
  } 

  field!:string;
  value!:string;

  search(){
    console.log("search api");
    this.http.get('http://localhost:8082/api/product/search/'+this.field+'/'+this.value).subscribe((data:any)=>{
      this.products=data;
      console.log(data);
      this.field="";
      this.value="";
    })
  }

  searchf(){
    this.http.get('http://localhost:8082/api/product/searchf/'+this.field).subscribe((data:any)=>{
      this.products=data;
      console.log(data);
      this.field="";
    })
  }

  searchv(){
    this.http.get('http://localhost:8082/api/product/searchv/'+this.value).subscribe((data:any)=>{
      this.products=data;
      console.log(data);
      this.value="";
    })
  }

  viewType="document";
  getImageDataUrl(base64ImageData: string): string {
    return `data:image/png;base64,${base64ImageData}`;
  }
  
  addToFavorite(product:any){
   
      if(product.favorite){
        product.favorite=false;
      }
      else{
        product.favorite=true
      }
      this.http.put('http://localhost:8082/api/product/update1',product, { responseType: 'text' }).subscribe(data=>{
        console.log(data);  
        if(product.favorite){
          this.service.openSnackBar("Product added to favorites...❤️", 'example-pizza-party');
        }
        else{
          this.service.openSnackBar("Product removed from favorites... ❌", 'example-pizza-party');
        }
     })
  }

  

  getAllFav(){
    if(this.favMessage=='Show Fav'){
     this.http.get('http://localhost:8082/api/product/getAllFav/'+true).subscribe((resultData: any) => {
       console.log(resultData);
       this.products = resultData;
       this.favMessage='Show All'
     })
    }
    else{
     this.getAllProducts();
     this.favMessage='Show Fav';
    }
   }
   favMessage='Show Fav';
}
