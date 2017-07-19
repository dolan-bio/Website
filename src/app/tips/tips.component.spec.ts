import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { TipsComponent } from './tips.component';
import { TipsService } from './tips.service';

describe('TipsComponent', () => {
    let component: TipsComponent;
    let fixture: ComponentFixture<TipsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TipsComponent],
            providers: [
                TipsService,
            ],
            imports: [
                HttpModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TipsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
