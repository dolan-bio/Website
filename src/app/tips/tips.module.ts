import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TipsComponent } from './tips.component';
import { TipsService } from './tips.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        TipsComponent,
    ],
    providers: [
        TipsService,
    ],
    exports: [
        TipsComponent,
    ],
})
export class TipsModule { }
