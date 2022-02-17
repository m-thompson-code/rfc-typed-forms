import { formatDate } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, LOCALE_ID } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type OnTouch = () => void;
export type OnChange = (value: Date) => void;

@Directive({
    // Override default value accessor for input[type=datetime-local]
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: 'input[type=datetime-local]',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: DatetimeControlValueAccessorDirective,
            multi: true,
        },
    ],
})
export class DatetimeControlValueAccessorDirective implements ControlValueAccessor {
    private value?: Date | null;

    private registeredOnChange!: OnChange;
    private registeredOnTouch!: OnTouch;

    constructor(private readonly elementRef: ElementRef<HTMLInputElement>, @Inject(LOCALE_ID) private readonly locale: string) {}

    writeValue(dateISOStringOrDate: string | Date): void {
        this.value = this.getDate(dateISOStringOrDate);
        this.elementRef.nativeElement.value = formatDate(this.value, 'yyyy-MM-ddThh:mm', this.locale);
    }

    registerOnChange(controlValueAccessorOnChangeCallback: OnChange): void {
        this.registeredOnChange = controlValueAccessorOnChangeCallback;
    }

    @HostListener('input', ['$event.target.value'])
    onInputValueChange(dateISOString: string): void {
        this.registeredOnChange(this.getDate(dateISOString));
    }

    registerOnTouched(controlValueAccessorOnTouchCallback: OnTouch): void {
        this.registeredOnTouch = controlValueAccessorOnTouchCallback;
    }

    @HostListener('blur')
    onInputBlur(): void {
        this.registeredOnTouch();
    }

    getDate(dateISOString: string | Date): Date {
        return new Date(dateISOString);
    }
}
