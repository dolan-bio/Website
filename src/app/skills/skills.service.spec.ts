import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { SkillsService } from './skills.service';

describe('SkillsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SkillsService],
            imports: [HttpModule],
        });
    });

    it(
        'should be created',
        inject([SkillsService], (service: SkillsService) => {
            expect(service).toBeTruthy();
        }),
    );
});
