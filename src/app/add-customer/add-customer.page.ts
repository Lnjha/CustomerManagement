import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-add-customer',
  templateUrl: './add-customer.page.html',
  styleUrls: [ './add-customer.page.scss' ],
} )
export class AddCustomerPage implements OnInit {
  customerForm: FormGroup;
  constructor( private customerService: CustomerService, private fb: FormBuilder, private router: Router ) {
    this.customerForm = this.fb.group( {
      name: [ '', Validators.required ],
      contactNumber: [ '', Validators.required ],
      email: [ '', Validators.required ],
      address: [ '' ]
    } );
  }

  ngOnInit() {
  }
  onSubmit() {
    this.addNewCustomer();
  }
  addNewCustomer() {
    this.customerService.AddNewCustomer( this.customerForm.value ).subscribe( () => {
      alert( 'Customer added sucessfully' );
      this.router.navigate( [ '' ] );
    },
      error => {
        console.log( error );
      } )
  }

}
