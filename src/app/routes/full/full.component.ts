import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fromEvent, map, Observable } from 'rxjs';

@Component({
    selector: 'app-full',
    templateUrl: './full.component.html',
    styleUrls: ['./full.component.scss'],
})
export class FullComponent implements OnInit {
    @ViewChild('formRef', { static: true }) formRef!: ElementRef<HTMLFormElement>;

    form: FormGroup;

    submitValue$!: Observable<unknown>;
    submitRawValue$!: Observable<unknown>;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            name: ['', Validators.required],
            favoriteAngularVersionMajor: [2, [Validators.min(2), Validators.max(14)]],
            favoriteAngularVersionMinor: [2, [Validators.min(2), Validators.max(14)]],
            favoriteAngularVersionPatch: [2, [Validators.min(2), Validators.max(14)]],
            hateReact: [false],
            favoriteLinter: ['eslint'],
            powerLevel: [],
            color: [],
            date: [],
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

    reset(): void {
        this.form.reset();
    }

    resetWithValues(): void {
        this.form.reset({
            name: 'no name',
            favoriteAngularVersionMajor: 2,
            favoriteLinter: 'eslint',
        });
    }
}
