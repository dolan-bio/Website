import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';

@Injectable()
export class GithubService {

    private github$: Observable<GithubStats>;

    constructor(http: Http) {
        this.github$ = http.get(`${environment.webtask.uri}/github`).map((res) => res.json() as GithubStats)
            .publish()
            .refCount();
    }

    public get Github$(): Observable<GithubStats> {
        return this.github$;
    }

}
