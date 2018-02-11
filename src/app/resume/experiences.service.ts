import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';

@Injectable()
export class ExperiencesService {
    private whenFetched: Observable<ExperienceDocument[]>;

    constructor(http: Http) {
        this.whenFetched = http
            .get(`${environment.webtask.uri}/experiences`)
            .map((res) => res.json() as ExperienceDocument[]);
    }

    public get WhenFetched(): Observable<ExperienceDocument[]> {
        return this.whenFetched;
    }
}
