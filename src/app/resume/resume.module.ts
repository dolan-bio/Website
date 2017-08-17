import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CvModule } from '../cv/cv.module';
import { EducationsService } from './educations.service';
import { ExperiencesService } from './experiences.service';
import { LoadingComponent } from './loading/loading.component';
import { ResumeComponent } from './resume.component';

@NgModule({
    imports: [
        CommonModule,
        CvModule,
    ],
    declarations: [
        ResumeComponent,
        LoadingComponent,
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
