import { Component, OnInit } from '@angular/core';
import { ModulesService } from '../../modules.service';

@Component({
    selector: 'mg-logo-slider',
    templateUrl: './logo-slider.component.html',
    styleUrls: ['./logo-slider.component.css']
})
export class LogoSliderComponent implements OnInit {

    public logoList: any;
    public scrollYPosition: number = 0;

    constructor(
        private _modulesService: ModulesService
    ) { }

    ngOnInit(): void {
        this.logoList = this._modulesService.logoList;
    }

    public onSelectSliderLogo(logo: any) {
        for (let i = 0; i < this.logoList.length; i++) {
            this.logoList[i].isSelected = false;
        }
        logo.isSelected = true;
    }

    public async next(): Promise<void> {
        let element = document.getElementById("logoWrapper");
        element!.style.scrollBehavior = "smooth";
        console.log(element?.scrollLeft);
        element!.scrollLeft += 200;
        this.scrollYPosition = element!.scrollLeft;
        console.log(element?.scrollLeft);
        console.log(this.scrollYPosition);
    }

    public async previous(): Promise<void> {
        let element = document.getElementById("logoWrapper");
        element!.style.scrollBehavior = "smooth";
        element!.scrollLeft -= 200;
        this.scrollYPosition = element!.scrollLeft;
        console.log(element?.scrollLeft);
        console.log(this.scrollYPosition);
    }
}
