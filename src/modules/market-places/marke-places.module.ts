import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketPlacesComponent } from './components/market-places.component';

@NgModule({
    declarations: [
        MarketPlacesComponent
    ],
    imports: [CommonModule],
    exports: [
        MarketPlacesComponent
    ],
    providers: [],
})
export class MarketPlacesModule { }