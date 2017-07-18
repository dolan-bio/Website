import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ExperiencesService } from './experiences.service';

describe('ExperiencesService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ExperiencesService],
            imports: [
                HttpModule,
            ],
        });
    });

    it('should be created', inject([ExperiencesService], (service: ExperiencesService) => {
        expect(service).toBeTruthy();
    }));
});
