import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';

@Injectable()
export class GithubService {

    private profile$: Observable<GithubModel[]>;
    private lastEvent$: Observable<GithubEvent>;
    private rank$: Observable<number>;

    constructor(http: Http) {
        this.profile$ = http.get(`${environment.server.uri}/github/profile`).map((res) => res.json() as GithubModel[])
            .publish()
            .refCount();

        this.lastEvent$ = http.get(`${environment.server.uri}/github/event`).map((res) => res.json() as GithubEvent)
            .publish()
            .refCount();

        this.rank$ = http.get(`${environment.server.uri}/github/rank`).map((res) => res.json() as GithubRank)
            .map((data) => {
                return data.rank;
            })
            .publish()
            .refCount();
    }

    public get Profile$(): Observable<GithubModel[]> {
        return this.profile$;
    }

    public get LastEvent$(): Observable<GithubEvent> {
        return this.lastEvent$;
    }

    public get Rank$(): Observable<number> {
        return this.rank$;
    }
}
