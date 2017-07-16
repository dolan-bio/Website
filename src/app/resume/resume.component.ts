import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { EducationsService } from './educations.service';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
    public whenFetchedEducations: Observable<EducationModel[]>;

    constructor(educationsService: EducationsService) {
        this.whenFetchedEducations = educationsService.WhenFetched;
    }

}
