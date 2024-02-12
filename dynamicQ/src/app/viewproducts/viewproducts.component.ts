import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdateComponent } from '../update/update.component';
import { DemodialogComponent } from '../demodialog/demodialog.component';
import { ViewdetailsComponent } from '../viewdetails/viewdetails.component';
import { AboutComponent } from '../about/about.component';
import { SuccessComponent } from '../success/success.component';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit{

  products:any[]=[];
  constructor(private http: HttpClient, private router :Router, private dialog: MatDialog, private _snackBar: MatSnackBar){

  }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
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
      this.openSnackBar("Product deleted sucessfully...", 'delete-snackbar');
    })
  }
  update(pid:number){
    // this.router.navigate(['update',id]);
    const dialogRef = this.dialog.open(DemodialogComponent,{
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
    const dialogRef = this.dialog.open(ViewdetailsComponent,{
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
          this.openSnackBar("Product added to favorites...❤️", 'example-pizza-party');
        }
        else{
          this.openSnackBar("Product removed from favorites... ❌", 'example-pizza-party');
        }
     })
  }

  openSnackBar(message:string, action: string) {
    // this._snackBar.open(message, action, {
    //   duration: 3 * 1000,
    //   verticalPosition: 'bottom', // 'top' | 'bottom'
    //   horizontalPosition: 'center',//'start' | 'center' | 'end' | 'left' | 'right'
    //   panelClass:["red-snackbar"]
    // });
    this._snackBar.openFromComponent(SuccessComponent, {
      data: {msg:message,
      sty:action},
      duration: 4 * 1000,
    });
  }

  getAllFav(){
    if(this.favMessage=='Show Favourites'){
     this.http.get('http://localhost:8082/api/product/getAllFav/'+true).subscribe((resultData: any) => {
       console.log(resultData);
       this.products = resultData;
       this.favMessage='Show All'
     })
    }
    else{
     this.getAllProducts();
     this.favMessage='Show Favourites';
    }
   }
   favMessage='Show Favourites';
}
