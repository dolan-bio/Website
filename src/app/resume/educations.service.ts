import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';

@Injectable()
export class EducationsService {

    private whenFetched: Observable<EducationModel[]>;

    constructor(http: Http) {
        this.whenFetched = http.get(`${environment.webtask.uri}/educations`).map((res) => res.json() as EducationModel[]);
    }

    public get WhenFetched(): Observable<EducationModel[]> {
        return this.whenFetched;
    }
}
