import { Component, OnInit } from '@angular/core';
import { ModulesService } from '../../modules.service';

@Component({
    selector: 'mg-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

    public menuList: any;
    public productListTop: any;
    public productListBottom: any;

    public productListTop2: any;
    public productListBottom2: any;

    public selectedMenuIndex: number = 0;

    constructor(
        private _modulesService: ModulesService
    ) { }

    ngOnInit(): void {
        this.menuList = this._modulesService.menuList;
        this.productListTop = this._modulesService.productListTop;
        this.productListBottom = this._modulesService.productListBottom;
        this.productListTop2 = this._modulesService.productListTop2;
        this.productListBottom2 = this._modulesService.productListBottom2;
    }

    public async onSelectMenuClick(index: number): Promise<void> {
        this.selectedMenuIndex = index;
    }
}
