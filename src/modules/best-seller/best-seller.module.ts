import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellerComponent } from './components/best-seller.component';

@NgModule({
    declarations: [
        BestSellerComponent
    ],
    imports: [CommonModule],
    exports: [
        BestSellerComponent
    ],
    providers: [],
})
export class BestSellerModule { }