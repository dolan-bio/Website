import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { GithubService } from './github.service';

@Component({
    selector: 'app-github',
    templateUrl: './github.component.html',
    styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {
    public whenFetchedGithub: Observable<GithubModel[]>;
    public whenFetchedGithubEvent: Observable<GithubEvent>;
    public rank$: Observable<number>;

    constructor(githubService: GithubService) {
        this.whenFetchedGithub = githubService.Profile$;
        this.whenFetchedGithubEvent = githubService.LastEvent$;
        this.rank$ = githubService.Rank$;
    }

    public ngOnInit(): void {
    }

}
