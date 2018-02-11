import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CvService } from './cv.service';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    providers: [CvService],
})
export class CvModule {}
