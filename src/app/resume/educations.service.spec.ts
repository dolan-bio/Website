import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { EducationsService } from './educations.service';

describe('EducationsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EducationsService],
            imports: [HttpModule],
        });
    });

    it(
        'should be created',
        inject([EducationsService], (service: EducationsService) => {
            expect(service).toBeTruthy();
        }),
    );
});
