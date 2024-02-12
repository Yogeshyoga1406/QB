import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  constructor(private http:HttpClient){
    
  }

  products:any[]=[];

  field!:string;
  value!:string;

  fv:boolean=false;
  f:boolean=true;
  v:boolean=true;

  sign="*"
  ngOnInit(): void {
    this.fv=false;
  }
  search(){
    console.log("search api");
    this.http.get('http://localhost:8082/api/product/search/'+this.field+'/'+this.value).subscribe((data:any)=>{
      this.products=data;
      console.log(data);
      this.field="";
      this.value="";
    })
  }
  fav(){
    this.fv=false;
    this.f=true;
    this.v=true;
  }
  fi(){
    this.fv=true;
    this.f=false;
    this.v=true;
  }
  va(){
    this.fv=true;
    this.f=true;
    this.v=false;
  }
  searchf(){
    this.http.get('http://localhost:8082/api/product/searchf/'+this.field).subscribe((data:any)=>{
      this.products=data;
      console.log(this.field);
      
      console.log(data);
      this.field="";
    })
  }

  searchv(){
    this.http.get('http://localhost:8082/api/product/searchv/'+this.value).subscribe((data:any)=>{
      this.products=data;
      if(this.products.length==0){
        this.datanull=true;
      }
      console.log(data);
      this.value="";
    })
  }
  datanull=false
}
