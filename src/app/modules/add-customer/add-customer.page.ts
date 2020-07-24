import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../core/services/customer.service';

@Component( {
  selector: 'app-add-customer',
  templateUrl: './add-customer.page.html',
  styleUrls: [ './add-customer.page.scss' ],
} )
export class AddCustomerPage implements OnInit {
  customerForm: FormGroup;
  constructor( private customerService: CustomerService, private fb: FormBuilder, private router: Router ) {

  }

  ngOnInit() {
    this.InitializeForm();
  }
  InitializeForm() {
    this.customerForm = this.fb.group( {
      name: [ '', Validators.required ],
      contactNumber: [ '', Validators.required ],
      email: [ '', [
        Validators.required,
        Validators.pattern( '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' ) ] ],
      address: [ '' ]
    } );
  }

  onSubmit() {
    this.addNewCustomer();
  }
  addNewCustomer() {
    this.customerService.AddNewCustomer( this.customerForm.value ).subscribe( () => {
      alert( 'Customer added sucessfully' );
      this.InitializeForm();
      this.router.navigate( [ '' ] );
    },
      error => {
        console.log( error );
      } );
  }

}
