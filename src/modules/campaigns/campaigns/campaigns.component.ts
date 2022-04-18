import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mg-campaigns',
    templateUrl: './campaigns.component.html',
    styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    public async next(): Promise<void> {
        let element = document.getElementById("imagesWrapper");
        element!.style.scrollBehavior = "smooth";
        element!.scrollLeft += 538;
        if (element!.scrollLeft > 1075) {
            element!.scrollLeft = 0;
        }
        console.log(element?.scrollLeft);
    }
}
