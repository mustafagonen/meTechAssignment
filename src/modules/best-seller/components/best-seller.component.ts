import { Component, OnInit } from '@angular/core';
import { ModulesService } from '../../modules.service';

@Component({
    selector: 'mg-best-seller',
    templateUrl: './best-seller.component.html',
    styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit {
    public productListTop: any;
    public productListBottom: any;

    constructor(
        private _modulesService: ModulesService
    ) { }

    ngOnInit(): void {
        this.productListTop = this._modulesService.productListTop;
        this.productListBottom = this._modulesService.productListBottom;
    }
}
