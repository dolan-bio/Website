import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CvService } from '../cv/cv.service';
import { EducationsService } from './educations.service';
import { ExperiencesService } from './experiences.service';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
    public whenFetchedExperiences: Observable<ExperienceDocument[]>;
    public whenFetchedEducations: Observable<EducationModel[]>;

    constructor(educationsService: EducationsService, experienceService: ExperiencesService, private cvService: CvService) {
        this.whenFetchedEducations = educationsService.WhenFetched;
        this.whenFetchedExperiences = experienceService.WhenFetched;
    }

    public generateCv(): void {
        this.cvService.Cv$.subscribe();
    }

}
