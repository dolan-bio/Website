/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeroComponent } from './hero.component';
import { MouseIconComponent } from './mouse-icon/mouse-icon.component';

describe('HeroComponent', () => {
    let component: HeroComponent;
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeroComponent,
                MouseIconComponent,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
