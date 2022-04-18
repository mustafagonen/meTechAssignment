import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBottomComponent } from './components/footer-bottom.component';

@NgModule({
    declarations: [
        FooterBottomComponent
    ],
    imports: [CommonModule],
    exports: [
        FooterBottomComponent
    ],
    providers: [],
})
export class FooterBottomModule { }