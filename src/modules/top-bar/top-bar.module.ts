import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar.component';

@NgModule({
    declarations: [
        TopBarComponent
    ],
    imports: [CommonModule],
    exports: [
        TopBarComponent
    ],
    providers: [],
})
export class TopBarModule { }