import { inject, TestBed } from '@angular/core/testing';

import { EducationsService } from './educations.service';

describe('EducationsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EducationsService],
        });
    });

    it('should be created', inject([EducationsService], (service: EducationsService) => {
        expect(service).toBeTruthy();
    }));
});
