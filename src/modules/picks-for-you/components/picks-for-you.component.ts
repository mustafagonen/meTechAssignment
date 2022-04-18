import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mg-picks-for-you',
    templateUrl: './picks-for-you.component.html',
    styleUrls: ['./picks-for-you.component.css']
})
export class PicksForYouComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    public async next(): Promise<void> {
        let element = document.getElementById("picksWrapper");
        element!.style.scrollBehavior = "smooth";
        element!.scrollLeft += 538;
        if (element!.scrollLeft > 1075) {
            element!.scrollLeft = 0;
        }
        console.log(element?.scrollLeft);
    }
}
