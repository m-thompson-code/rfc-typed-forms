import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fromEvent, map, Observable } from 'rxjs';

@Component({
    selector: 'app-disabled-forms',
    templateUrl: './disabled-forms.component.html',
    styleUrls: ['./disabled-forms.component.scss'],
})
export class DisabledFormsComponent implements OnInit {
    @ViewChild('formRef', { static: true }) formRef!: ElementRef<HTMLFormElement>;

    form: FormGroup;

    submitValue$!: Observable<unknown>;
    submitRawValue$!: Observable<unknown>;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            name: ['', Validators.required],
            favoriteAngularVersion: [2, [Validators.min(2), Validators.max(14)]],
            hateReact: [false],
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
