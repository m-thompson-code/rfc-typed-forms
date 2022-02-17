import { ElementRef } from '@angular/core';
import { DatetimeControlValueAccessorDirective } from './datetime-control-value-accessor.directive';

describe('DatetimeControlValueAccessorDirective', () => {
    it('should create an instance', () => {
        const directive = new DatetimeControlValueAccessorDirective({} as ElementRef, '');
        expect(directive).toBeTruthy();
    });
});
