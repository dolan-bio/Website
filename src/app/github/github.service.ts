import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from 'environments/environment';

@Injectable()
export class GithubService {

    private whenFetched: Observable<IGithubModel[]>;
    private whenFetchedLastEvent: Observable<GitHubEvent>;

    constructor(http: Http) {
        this.whenFetched = http.get(`${environment.server.uri}/github/profile`).map((res) => res.json() as IGithubModel[])
            .publish()
            .refCount();

        this.whenFetchedLastEvent = http.get(`${environment.server.uri}/github/event`).map((res) => res.json() as GitHubEvent)
            .publish()
            .refCount();
    }

    public get WhenFetched(): Observable<IGithubModel[]> {
        return this.whenFetched;
    }

    public get WhenFetchedLastEvent(): Observable<GitHubEvent> {
        return this.whenFetchedLastEvent;
    }
}
