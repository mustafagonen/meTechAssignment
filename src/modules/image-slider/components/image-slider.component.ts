import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mg-image-slider',
    templateUrl: './image-slider.component.html',
    styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

    public dotList = [
        { isSelected: false },
        { isSelected: false },
        { isSelected: true },
        { isSelected: false }
    ];

    public selectedImageIndex: number = 0;

    constructor() { }

    ngOnInit(): void { }

    public onSelectSliderImage(dot: any) {
        for (let i = 0; i < this.dotList.length; i++) {
            this.dotList[i].isSelected = false;
        }
        dot.isSelected = true;

        this.selectedImageIndex = this.selectedImageIndex + 1;
        if (this.selectedImageIndex == 3) {
            this.selectedImageIndex = 0;
        }
    }
}
