import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { UpdateComponent } from './update/update.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',redirectTo:'employee',pathMatch:'full'},
  {path:'add',component:ProductComponent},
  {path:'products',component:ViewproductsComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'view/:id',component:ViewdetailsComponent},
  {path:'search',component:SearchComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
