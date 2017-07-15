import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroComponent } from './hero.component';
import { MouseIconComponent } from './mouse-icon/mouse-icon.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        HeroComponent,
        MouseIconComponent,
    ],
    exports: [
        HeroComponent,
    ],
})
export class HeroModule { }
