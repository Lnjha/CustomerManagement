import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ICustomer } from '../contracts/icustomer';

@Component( {
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: [ './customers.page.scss' ],
} )
export class CustomersPage implements OnInit {
  customers: ICustomer[];
  constructor( private customerService: CustomerService ) { }

  ngOnInit() {
    this.GetAllCustomers();
  }
  ionViewWillEnter() {
    this.GetAllCustomers();
}

  GetAllCustomers() {
    this.customerService.GetAllCustomers().subscribe( ( response: ICustomer[] ) => {
      this.customers = response;

    },
      ( error ) => {
        console.log( error );
      } );
  }

}
