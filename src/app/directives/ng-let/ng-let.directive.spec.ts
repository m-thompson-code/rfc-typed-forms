import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgLetDirective } from './ng-let.directive';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'test-cmp',
    template: '<div *ngLet="prop as value">{{ value }}</div>',
})
class TestComponent {
    prop: any;
}

describe('NgLetDirective', () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    function getComponent(): TestComponent {
        return fixture.componentInstance;
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [NgLetDirective],
        });

        fixture = TestBed.createComponent(TestComponent);
    });

    it('should create an instance', () => {
        component = fixture.componentInstance;
        expect(fixture.debugElement.queryAll(By.css('div')).length).toEqual(1);
        expect(component).toBeTruthy();
    });
});
