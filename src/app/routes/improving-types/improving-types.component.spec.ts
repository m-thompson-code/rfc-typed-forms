import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovingTypesComponent } from './improving-types.component';

describe('ImprovingTypesComponent', () => {
    let component: ImprovingTypesComponent;
    let fixture: ComponentFixture<ImprovingTypesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ImprovingTypesComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ImprovingTypesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
