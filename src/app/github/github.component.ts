import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { GithubService } from './github.service';

@Component({
    selector: 'app-github',
    templateUrl: './github.component.html',
    styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {
    public whenFetchedGithub: Observable<IGithubModel[]>;

    constructor(private githubService: GithubService) {
        this.whenFetchedGithub = this.githubService.WhenFetched;
    }

    public ngOnInit(): void {
    }

}
