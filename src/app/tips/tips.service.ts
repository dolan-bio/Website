import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';

@Injectable()
export class TipsService {
    private whenFetched: Observable<TipModel[]>;

    constructor(http: Http) {
        this.whenFetched = http
            .get(`${environment.webtask.uri}/tips`)
            .map((res) => res.json() as TipModel[]);
    }

    public get WhenFetched(): Observable<TipModel[]> {
        return this.whenFetched;
    }
}
