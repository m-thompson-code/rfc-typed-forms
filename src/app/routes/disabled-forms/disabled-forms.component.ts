import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent, map, Observable } from 'rxjs';

// type TypedForm = {
//     name: FormControl<string | null>;
//     favoriteAngularVersion: FormControl<number | null>;
//     hateReact: FormControl<boolean | null>;
// }

@Component({
    selector: 'app-disabled-forms',
    templateUrl: './disabled-forms.component.html',
    styleUrls: ['./disabled-forms.component.scss'],
})
export class DisabledFormsComponent implements OnInit {
    @ViewChild('formRef', { static: true }) formRef!: ElementRef<HTMLFormElement>;

    form: FormGroup; // <TypedForm>;

    // submitValue$!: Observable<FormGroup<TypedForm>['value']>;
    submitValue$!: Observable<unknown>;
    // submitRawValue$!: Observable<ReturnType<FormGroup<TypedForm>['getRawValue']>>;
    submitRawValue$!: Observable<unknown>;

    constructor() {
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            favoriteAngularVersion: new FormControl(2, [Validators.min(2), Validators.max(14)]),
            hateReact: new FormControl(false),
        });
    }

    ngOnInit(): void {
        this.submitValue$ = fromEvent(this.formRef.nativeElement, 'submit').pipe(map(() => this.form.value));

        this.submitRawValue$ = fromEvent(this.formRef.nativeElement, 'submit').pipe(map(() => this.form.getRawValue()));
    }

    toggleDisabledState(): void {
        if (this.form.controls['hateReact'].disabled) {
            this.form.controls['hateReact'].enable();
        } else {
            this.form.controls['hateReact'].disable();
        }
    }
}
