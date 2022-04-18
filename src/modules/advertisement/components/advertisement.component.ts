import { Component, OnInit } from '@angular/core';
import { ModulesService } from '../../modules.service';

@Component({
    selector: 'mg-advertisement',
    templateUrl: './advertisement.component.html',
    styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

    public advertisementList: any;

    constructor(
        private _modulesService: ModulesService
    ) { }

    ngOnInit(): void {
        this.advertisementList = this._modulesService.advertisementList;
    }
}
