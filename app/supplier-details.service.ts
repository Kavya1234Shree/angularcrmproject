import { SupplierDetails } from './supplier-details';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SupplierDetailsService {

  constructor(private http:HttpClient) { }

  getSupplier(){
    return this.http.get<SupplierDetails[]>('http://nameurdomain.com/stox/restsuppliers.php')
  }


  createSupplier(supplierdetails:SupplierDetails){
    
    return this.http.post('http://nameurdomain.com/stox/restcreatesupplier.php?txtfull_name=Val1&txtCompany_name=Val2&txtemail=val3&txtGST=val4&txtcontact_number=val5&txtFaxOffice_number=val6&txtaddress=val7&txtCity=val8&txtState=val9&txtCountry=val10&txtPostcode=val11', supplierdetails)
  }
}
