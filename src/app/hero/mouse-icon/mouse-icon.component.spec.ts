/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MouseIconComponent } from './mouse-icon.component';

describe('HeroComponent', () => {
    let component: MouseIconComponent;
    let fixture: ComponentFixture<MouseIconComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MouseIconComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MouseIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
