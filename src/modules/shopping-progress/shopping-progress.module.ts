import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppindProgressComponent } from './components/shopping-progress.component';

@NgModule({
    declarations: [
        ShoppindProgressComponent
    ],
    imports: [CommonModule],
    exports: [
        ShoppindProgressComponent
    ],
    providers: [],
})
export class ShoppingProgressModule { }