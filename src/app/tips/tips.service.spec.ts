import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { TipsService } from './tips.service';

describe('TipsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TipsService],
            imports: [
                HttpModule,
            ],
        });
    });

    it('should be created', inject([TipsService], (service: TipsService) => {
        expect(service).toBeTruthy();
    }));
});
