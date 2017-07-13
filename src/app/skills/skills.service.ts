import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { environment } from 'environments/environment';

export interface ISkillModel {
    name: string;
    image: string;
}

@Injectable()
export class SkillsService {

    private whenFetchedSkills: Observable<ISkillModel[]>;

    constructor(http: Http) {
        this.whenFetchedSkills = http.get(`${environment.server.uri}/skills`).map((res) => res.json() as ISkillModel[]);
    }

    public get WhenFetchedSkills(): Observable<ISkillModel[]> {
        return this.whenFetchedSkills;
    }

}
