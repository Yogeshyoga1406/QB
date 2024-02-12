import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { UpdateComponent } from './update/update.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { DemoviewComponent } from './demoview/demoview.component';
import { InsertComponent } from './insert/insert.component';
import { DerivationComponent } from './derivation/derivation.component';
import { DemoUpdateComponent } from './demo-update/demo-update.component';
import { SendMailComponent } from './send-mail/send-mail.component';

const routes: Routes = [
  {path:'',redirectTo:'employee',pathMatch:'full'},
  {path:'add',component:ProductComponent},
  {path:'products',component:DemoviewComponent},
  {path:'update/:id',component:DemoUpdateComponent},
  {path:'view/:id',component:ViewdetailsComponent},
  {path:'search',component:InsertComponent},
  {path:'about',component:SendMailComponent},
  {path:'calc',component:InsertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
 