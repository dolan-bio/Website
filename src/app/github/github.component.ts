import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GithubService } from './github.service';

@Component({
    selector: 'app-github',
    templateUrl: './github.component.html',
    styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {
    public github$: Observable<GithubStats>;

    constructor(githubService: GithubService) {
        this.github$ = githubService.Github$;
    }

    public ngOnInit(): void {}
}
