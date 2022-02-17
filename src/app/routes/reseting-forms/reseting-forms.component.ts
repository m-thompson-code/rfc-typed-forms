import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fromEvent, map, Observable } from 'rxjs';

@Component({
    selector: 'app-reseting-forms',
    templateUrl: './reseting-forms.component.html',
    styleUrls: ['./reseting-forms.component.scss'],
})
export class ResetingFormsComponent {
    @ViewChild('formRef', { static: true }) formRef!: ElementRef<HTMLFormElement>;

    form: FormGroup;

    submitValue$!: Observable<unknown>;
    submitRawValue$!: Observable<unknown>;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            name: ['', Validators.required],
            favoriteAngularVersion: [2, [Validators.min(2), Validators.max(14)]],
            favoriteLinter: ['eslint'],
        });
    }

    ngOnInit(): void {
        this.submitValue$ = fromEvent(this.formRef.nativeElement, 'submit').pipe(map(() => this.form.value));
    }

    reset(): void {
        this.form.reset();
    }

    resetWithValues(): void {
        this.form.reset({
            name: 'no name',
            favoriteAngularVersion: 2,
            favoriteLinter: 'eslint',
        });
    }
}
