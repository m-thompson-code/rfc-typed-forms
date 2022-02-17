import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetingFormsComponent } from './reseting-forms.component';

describe('ResetingFormsComponent', () => {
    let component: ResetingFormsComponent;
    let fixture: ComponentFixture<ResetingFormsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ResetingFormsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ResetingFormsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
