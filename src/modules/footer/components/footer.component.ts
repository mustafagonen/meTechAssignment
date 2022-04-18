import { Component, OnInit } from '@angular/core';
import { ModulesService } from '../../modules.service';

@Component({
    selector: 'mg-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    public footerListLeft: any;
    public footerListRight: any;

    constructor(
        private _modulesService: ModulesService
    ) { }

    ngOnInit(): void {
        this.footerListLeft = this._modulesService.footerListLeft;
        this.footerListRight = this._modulesService.footerListRight;
    }
}
