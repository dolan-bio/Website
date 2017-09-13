import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { SkillsComponent } from './skills.component';
import { SkillsService } from './skills.service';

describe('SkillsComponent', () => {
    let component: SkillsComponent;
    let fixture: ComponentFixture<SkillsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SkillsComponent,
            ],
            imports: [
                HttpModule,
            ],
            providers: [
                SkillsService,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SkillsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
