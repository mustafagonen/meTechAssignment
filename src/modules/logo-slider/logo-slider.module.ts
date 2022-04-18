import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoSliderComponent } from './components/logo-slider.component';

@NgModule({
    declarations: [
        LogoSliderComponent
    ],
    imports: [CommonModule],
    exports: [
        LogoSliderComponent
    ],
    providers: [],
})
export class LogoSliderModule { }