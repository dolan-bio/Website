/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { MasonryModule } from 'angular2-masonry';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioService } from './portfolio.service';

describe('PortfolioComponent', () => {
    let component: PortfolioComponent;
    let fixture: ComponentFixture<PortfolioComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PortfolioComponent],
            imports: [
                MasonryModule,
                HttpModule,
            ],
            providers: [
                PortfolioService,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PortfolioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
