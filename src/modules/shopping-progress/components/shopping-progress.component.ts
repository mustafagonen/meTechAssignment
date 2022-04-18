import { Component, OnInit } from '@angular/core';
import { ModulesService } from '../../modules.service';

@Component({
    selector: 'mg-shopping-progress',
    templateUrl: './shopping-progress.component.html',
    styleUrls: ['./shopping-progress.component.css']
})
export class ShoppindProgressComponent implements OnInit {

    public progressList: any;

    constructor(
        private _modulesService: ModulesService
    ) { }

    ngOnInit(): void {
        this.progressList = this._modulesService.progressList;
    }
}
