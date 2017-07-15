import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { PortfolioService } from './portfolio.service';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
    public whenFetchedProjects: Observable<any[]>;

    constructor(portfolioService: PortfolioService) {
        this.whenFetchedProjects = portfolioService.WhenFetched;
    }
}
