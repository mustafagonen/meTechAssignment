import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './components/categories.component';
import { ModulesService } from '../modules.service';

@NgModule({
    declarations: [
        CategoriesComponent
    ],
    imports: [CommonModule],
    exports: [
        CategoriesComponent
    ],
    providers: [
    ],
})
export class CategoriesModule { }