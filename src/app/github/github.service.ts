import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from 'environments/environment';

interface IGithubModel {
    contributionCount: number;
    lineCount: number;
    repoCount: number;
}

@Injectable()
export class GithubService {

    private whenFetchedGithub: Observable<IGithubModel[]>;

    constructor(http: Http) {
        this.whenFetchedGithub = http.get(`${environment.server.uri}/github/profile`).map((res) => res.json() as IGithubModel[])
            .publish()
            .refCount();
    }

    public get WhenFetchedGithub(): Observable<IGithubModel[]> {
        return this.whenFetchedGithub;
    }
}
