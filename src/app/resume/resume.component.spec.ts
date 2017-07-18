/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';

import { EducationsService } from './educations.service';
import { ExperiencesService } from './experiences.service';
import { LoadingComponent } from './loading/loading.component';
import { ResumeComponent } from './resume.component';

describe('ResumeComponent', () => {
    let component: ResumeComponent;
    let fixture: ComponentFixture<ResumeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ResumeComponent,
                LoadingComponent,
            ],
            imports: [
                HttpModule,
            ],
            providers: [
                EducationsService,
                ExperiencesService,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResumeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
