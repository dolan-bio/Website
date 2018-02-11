import { Component } from '@angular/core';
import { MasonryOptions } from 'angular2-masonry';
import { Observable } from 'rxjs/Observable';

import { PortfolioService } from './portfolio.service';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
    public whenFetchedProjects: Observable<any[]>;
    public masonryOptions: MasonryOptions;

    constructor(portfolioService: PortfolioService) {
        this.whenFetchedProjects = portfolioService.WhenFetched;
        this.masonryOptions = {
            gutter: 10,
        };
    }
}
