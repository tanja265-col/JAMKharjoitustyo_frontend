import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { CustomerModel } from '../customer.model';
//import { Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  //propertyt
  formValue!: FormGroup;
  customerModelObj: CustomerModel = new CustomerModel();
  customerData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    //lomakkeen kohdat bindaus -> html-lomakkeeseen formgroup ja formcontrol-names
    this.formValue = this.formbuilder.group({
      //avain- arvoparit
      name: [''],
      email: [''],
      address: [''],
      info: [''],
      active: [''],
    });
    this.getAllCustomers();
  }
  // painikkeiden näkyminen kun klikkaa lisää asiakas-painiketta
  clickAddCustomer() {
    this.formValue.reset();
    this.showAdd = true; //näkyy
    this.showUpdate = false; // ei näy tässä kohtaa
  }

  //asiakkaan tietojen vienti
  postCustomerDetails() {
    this.customerModelObj.name = this.formValue.value.name;
    this.customerModelObj.email = this.formValue.value.email;
    this.customerModelObj.address = this.formValue.value.address;
    this.customerModelObj.info = this.formValue.value.info;
    this.customerModelObj.active = this.formValue.value.active;

    this.api.postCustomer(this.customerModelObj).subscribe(
      (res: any) => {
        console.log(res);
        alert('Customer added successfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllCustomers(); //resetin jälkeen kaikki näkymään
      },
      (err: any) => {
        alert('Something went wrong');
      }
    );
  }
  //asikkaiden haku
  getAllCustomers() {
    this.api.getCustomer(data).subscribe((res: any) => {
      this.customerData = res;
    });
  }
  //asiakkaan poisto (sen id.n perusella joka halutaan poistaa )
  deleteCustomer(row: any) {
    this.api.deleteCustomer(row.id).subscribe((res: any) => {
      alert('Customer deleted');
      this.getAllCustomers(); // poiston jälkeen hakee jäljellä olevat
    });
  }
  //asiakkaan tietojen muokkaus, asetetaan rivin arvot
  onEdit(row: any) {
    this.showAdd = false; //painikkeen näkyminen poissa
    this.showUpdate = true; // painike näkyy
    this.customerModelObj.id = row.id;
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['address'].setValue(row.address);
    this.formValue.controls['info'].setValue(row.info);
    this.formValue.controls['active'].setValue(row.active);
  }

  updateCustomerDetails() {
    this.customerModelObj.name = this.formValue.value.name;
    this.customerModelObj.email = this.formValue.value.email;
    this.customerModelObj.address = this.formValue.value.address;
    this.customerModelObj.info = this.formValue.value.info;
    this.customerModelObj.active = this.formValue.value.active;
    //tarvitaan objekti ja sen id
    this.api
      .updateCustomer(this.customerModelObj, this.customerModelObj.id)
      .subscribe((res: any) => {
        alert('Updated succesfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllCustomers();
      });
  }
}
function data(data: any, any: any) {
  throw new Error('Function not implemented.');
}
