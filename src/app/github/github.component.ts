import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { GithubService } from './github.service';

@Component({
    selector: 'app-github',
    templateUrl: './github.component.html',
    styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {
    public github: Observable<any[]>;

    constructor(private githubService: GithubService) {
        this.github = this.githubService.WhenFetchedGithub;
    }

    public ngOnInit(): void {
    }

}
