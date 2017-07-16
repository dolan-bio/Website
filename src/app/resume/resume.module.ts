import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EducationsService } from './educations.service';
import { ResumeComponent } from './resume.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ResumeComponent,
    ],
    providers: [
        EducationsService,
    ],
    exports: [
        ResumeComponent,
    ],
})
export class ResumeModule { }
