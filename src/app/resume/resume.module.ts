import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EducationsService } from './educations.service';
import { ExperiencesService } from './experiences.service';
import { ResumeComponent } from './resume.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    imports: [
        CommonModule,
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
