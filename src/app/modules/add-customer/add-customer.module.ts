import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddCustomerPageRoutingModule } from './add-customer-routing.module';
import { AddCustomerPage } from './add-customer.page';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddCustomerPageRoutingModule
  ],
  declarations: [ AddCustomerPage ],
  providers: [ FormBuilder ]
} )
export class AddCustomerPageModule { }
