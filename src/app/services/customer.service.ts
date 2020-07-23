import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ICustomer } from '../contracts/ICustomer';
import { environment } from 'src/environments/environment';

@Injectable( {
  providedIn: 'root'
} )
export class CustomerService {
  serviceUrl = environment.serviceBaseUrl + 'customers';
  constructor( private http: HttpClient ) { }

  GetAllCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>( this.serviceUrl );
  }

  AddNewCustomer( customer: any ) {
    return this.http.post( this.serviceUrl, customer );
  }
}
