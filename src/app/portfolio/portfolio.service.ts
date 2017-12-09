import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from 'environments/environment';

interface IProjectModel {
    imageUrl: string;
    title: string;
    description: string;
    link: string;
}

@Injectable()
export class PortfolioService {
    whenFetched: any;

    constructor(http: Http) {
        this.whenFetched = http.get(`${environment.webtask.uri}/projects`).map((res) => res.json() as IProjectModel[])
            .publish()
            .refCount();
    }

    public get WhenFetched(): Observable<IProjectModel[]> {
        return this.whenFetched;
    }

}
