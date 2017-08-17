import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CvService } from './cv.service';

describe('CvService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CvService,
            ],
            imports: [
                HttpModule,
            ],
        });
    });

    it('should be created', inject([CvService], (service: CvService) => {
        expect(service).toBeTruthy();
    }));
});
