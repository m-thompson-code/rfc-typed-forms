import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent, map, Observable } from 'rxjs';

enum Linter {
    ESLINT = 'eslint',
    TSLINT = 'tslint',
    OTHER = 'other',
}

// type AngularVersionForm = {
//     major: FormControl<number | null>;
//     minor: FormControl<number | null>;
//     patch: FormControl<number | null>;
// };

// type TypedForm = {
//     name: FormControl<string | null>;
//     favoriteAngularVersion: FormGroup<AngularVersionForm>;
//     hateReact: FormControl<boolean | null>;
//     favoriteLinter: FormControl<Linter | null>;
//     powerLevel: FormControl<number | null>;
//     color: FormControl<`#${string}` | null>;
//     date: FormControl<Date | null>;
// };

@Component({
    selector: 'app-full',
    templateUrl: './full.component.html',
    styleUrls: ['./full.component.scss'],
})
export class FullComponent implements OnInit {
    @ViewChild('formRef', { static: true }) formRef!: ElementRef<HTMLFormElement>;

    form: FormGroup; //<TypedForm>;

    submitValue$!: Observable<unknown>;
    // submitValue$!: Observable<FormGroup<TypedForm>['value']>;
    submitRawValue$!: Observable<unknown>;
    // submitRawValue$!: Observable<ReturnType<FormGroup<TypedForm>['getRawValue']>>;

    Linter = Linter;

    constructor() {
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            favoriteAngularVersion: new FormGroup({
                major: new FormControl(2, [Validators.min(2), Validators.max(14)]),
                minor: new FormControl(0, [Validators.min(0), Validators.max(30)]),
                patch: new FormControl(0, [Validators.min(0), Validators.max(30)]),
            }),
            hateReact: new FormControl(false),
            favoriteLinter: new FormControl(Linter.ESLINT),
            powerLevel: new FormControl(),
            color: new FormControl(),
            date: new FormControl(),
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
            favoriteAngularVersion: {
                major: 2,
                minor: 0,
                patch: 0,
            },
            hateReact: false,
            favoriteLinter: Linter.ESLINT,
            powerLevel: 0,
            color: '#000000',
            date: new Date(),
        });
    }
}
