import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup,FormControl} from "@angular/forms";
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'registration-cmp',
    moduleId: module.id,
    templateUrl: './registration.component.html'
})

export class RegistrationComponent implements OnInit{
  public vendor_registration:any;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {

    let resp = this.httpClient.get("http://165.22.219.195:4000/api/vendor-registration");
    resp.subscribe((data)=>this.vendor_registration=data);
  }



   
  // @Input() form: FormGroup;

  // constructor(public fb: FormBuilder,private http: HttpClient) {
  //    this.form = this.fb.group({
  //     vendor_name: "",
  //      company_email:"",
  //     company_name:"",
  //     phone:Number,
  //     address1: "",
  //       city: "",
  //       state: "",
  //       zip: Number,
  //     type_of_company:"",
  //     GSTN:"",
  //     GST_certificate: [null],
  //      account_no:Number,
  //       IFSC_code:"",
  //       type_of_account:"",
  //       level1_contact:Number,
  //       level2_contact:Number,
  //      level3_contact:Number
  //   })
  // }
  // Company: any = ['Software', 'Hardware', 'sales', 'marketing']

  // Account: any = ['Current', 'Savings', 'marketing']
  // ngOnInit() { }

  // uploadFile(event) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.form.patchValue({
  //     GST_certificate : file
  //   });
  //   this.form.get('GST_certificate').updateValueAndValidity()
  // }

  // changeCompany(event) {
  //   console.log(event.value)
  //   this. type_of_company.setValue(event.target.value, {
  //     onlySelf: true
  //   })
  // }
  // get type_of_company() {
  //   return this.form.get('type_of_company');
  // }

  // changeAccount(event) {
  //   console.log(event.value)
  //   this.type_of_account .setValue(event.target.value, {
  //     onlySelf: true
  //   })
  // }
  // get type_of_account() {
  //   return this.form.get('type_of_account');
  // }


  // submitForm() {
  //   var formData: any = new FormData();
  //    formData.append("vendor_name", this.form.get('vendor_name').value);
  //    formData.append("company_email", this.form.get('company_email').value);
  //    formData.append("company_name", this.form.get('company_name').value);
  //    formData.append("phone", this.form.get('phone').value);
  //   //  formData.append("address", this.form.get('address').value);
  //    formData.append("address[address1]", this.form.get('address1').value);
  //    formData.append("address[city]", this.form.get('city').value);
  //    formData.append("address[state]", this.form.get('state').value);
  //    formData.append("address[zip]", this.form.get('zip').value);
  //    formData.append("type_of_company", this.form.get('type_of_company').value);
  //    formData.append("GSTN", this.form.get('GSTN').value);
  //    formData.append("GST_certificate", this.form.get('GST_certificate').value);
  //   //  formData.append("bank_details", this.form.get('bank_details').value);
  //   formData.append("bank_details[account_no]", this.form.get('account_no').value);
  //     formData.append("bank_details[IFSC_code]", this.form.get('IFSC_code').value);
  //     formData.append("bank_details[type_of_account]", this.form.get('type_of_account').value);
  //   //  formData.append("escalation_matrices", this.form.get('escalation_matrices').value);
  //     formData.append("escalation_matrices[level1_contact]", this.form.get('level1_contact').value);
  //     formData.append("escalation_matrices[level2_contact]", this.form.get('level2_contact').value);
  //    formData.append("escalation_matrices[level3_contact]", this.form.get('level3_contact').value);

  //   this.http.post('http://165.22.219.195:4000/api/vendor-registration', formData).subscribe(
  //     (response) => console.log(response),
  //     (error) => console.log(error)
  //   )
  // }
}



