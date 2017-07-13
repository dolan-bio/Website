import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { environment } from 'environments/environment';

@Injectable()
export class SkillsService {

    private whenFetchedSkills: Observable<string>;

    constructor(http: Http) {
        this.whenFetchedSkills = http.get(`${environment.server.uri}/skills/595d3d1a734d1d256341a119/image`).map((res) => res.text());
    }

    public get WhenFetchedSkills(): Observable<string> {
        return this.whenFetchedSkills;
    }

}
