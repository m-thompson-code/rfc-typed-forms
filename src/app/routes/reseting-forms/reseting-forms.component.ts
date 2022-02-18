import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent, map, Observable } from 'rxjs';

enum Linter {
    ESLINT = 'eslint',
    TSLINT = 'tslint',
    OTHER = 'other',
}

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

    Linter = Linter;

    constructor() {
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            favoriteAngularVersion: new FormControl(2, [Validators.min(2), Validators.max(14)]),
            favoriteLinter: new FormControl(Linter.ESLINT),
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
            favoriteLinter: Linter.ESLINT,
        });
    }
}
