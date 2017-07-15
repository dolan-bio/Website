import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from 'environments/environment';

@Injectable()
export class GithubService {

    private whenFetched: Observable<GithubModel[]>;
    private whenFetchedLastEvent: Observable<GithubEvent>;

    constructor(http: Http) {
        this.whenFetched = http.get(`${environment.server.uri}/github/profile`).map((res) => res.json() as GithubModel[])
            .publish()
            .refCount();

        this.whenFetchedLastEvent = http.get(`${environment.server.uri}/github/event`).map((res) => res.json() as GithubEvent)
            .publish()
            .refCount();
    }

    public get WhenFetched(): Observable<GithubModel[]> {
        return this.whenFetched;
    }

    public get WhenFetchedLastEvent(): Observable<GithubEvent> {
        return this.whenFetchedLastEvent;
    }
}
