import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { environment } from 'environments/environment';

@Injectable()
export class EducationsService {

    private whenFetched: Observable<EducationModel[]>;

    constructor(http: Http) {
        this.whenFetched = http.get(`${environment.server.uri}/educations`).map((res) => res.json() as EducationModel[]);
    }

    public get WhenFetched(): Observable<EducationModel[]> {
        return this.whenFetched;
    }
}
