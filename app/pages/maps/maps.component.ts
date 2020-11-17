import { SupplierDetailsService } from './../../supplier-details.service';
import { Component,OnInit } from '@angular/core';
import{SupplierDetails} from './../../supplier-details';



@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
})

export class MapsComponent implements OnInit {
    supplier: SupplierDetails[];

    constructor(private _supplierdetailservice :SupplierDetailsService){

    }
    ngOnInit() {
        this._supplierdetailservice.getSupplier()
        .subscribe((data:SupplierDetails[])=>{
            this.supplier=data;
            console.log(this.supplier);

        })

        }
       

}
