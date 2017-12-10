import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';

export interface ISkillModel {
    name: string;
    image: string;
}

@Injectable()
export class SkillsService {

    private whenFetched: Observable<ISkillModel[]>;

    constructor(http: Http) {
        this.whenFetched = http.get(`${environment.webtask.uri}/skills`).map((res) => res.json() as ISkillModel[]);
    }

    public get WhenFetched(): Observable<ISkillModel[]> {
        return this.whenFetched;
    }

}
