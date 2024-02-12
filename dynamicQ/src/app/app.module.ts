import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { UpdateComponent } from './update/update.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component'
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { SearchComponent } from './search/search.component';
import { SuccessComponent } from './success/success.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import {NgIf} from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AboutComponent } from './about/about.component';
import { InsertComponent } from './insert/insert.component'
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { DemodialogComponent } from './demodialog/demodialog.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ViewproductsComponent,
    UpdateComponent,
    ConfirmationDialogComponent,
    ViewdetailsComponent,
    SearchComponent,
    SuccessComponent,
    AboutComponent,
    InsertComponent,
    DemodialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatRadioModule,
    NgIf,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
