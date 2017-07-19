import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

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

    constructor(educationsService: EducationsService, experienceService: ExperiencesService) {
        this.whenFetchedEducations = educationsService.WhenFetched;
        this.whenFetchedExperiences = experienceService.WhenFetched;
    }

}
