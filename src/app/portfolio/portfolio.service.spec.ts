import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { PortfolioService } from './portfolio.service';

describe('PortfolioService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PortfolioService],
            imports: [HttpModule],
        });
    });

    it(
        'should be created',
        inject([PortfolioService], (service: PortfolioService) => {
            expect(service).toBeTruthy();
        }),
    );
});
