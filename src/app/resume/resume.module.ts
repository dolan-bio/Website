import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EducationsService } from './educations.service';
import { ExperiencesService } from './experiences.service';
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
        ExperiencesService,
    ],
    exports: [
        ResumeComponent,
    ],
})
export class ResumeModule { }
