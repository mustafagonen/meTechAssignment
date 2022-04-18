import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicksForYouComponent } from './components/picks-for-you.component';

@NgModule({
    declarations: [
        PicksForYouComponent
    ],
    imports: [CommonModule],
    exports: [
        PicksForYouComponent
    ],
    providers: [],
})
export class PicksForYouModule { }