import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementComponent } from './components/advertisement.component';

@NgModule({
    declarations: [
        AdvertisementComponent
    ],
    imports: [CommonModule],
    exports: [
        AdvertisementComponent
    ],
    providers: [],
})
export class AdvertisementModule { }