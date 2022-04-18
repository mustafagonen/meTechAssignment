import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './components/image-slider.component';

@NgModule({
    declarations: [
        ImageSliderComponent
    ],
    imports: [CommonModule],
    exports: [
        ImageSliderComponent
    ],
    providers: [],
})
export class ImageSliderModule { }