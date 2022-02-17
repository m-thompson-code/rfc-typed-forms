import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealingWithErrorsComponent } from './dealing-with-errors.component';

describe('DealingWithErrorsComponent', () => {
    let component: DealingWithErrorsComponent;
    let fixture: ComponentFixture<DealingWithErrorsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DealingWithErrorsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DealingWithErrorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
