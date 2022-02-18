import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent, map, Observable } from 'rxjs';

// type TypedForm = {
//     name: FormControl<string | null>;
//     favoriteAngularVersion: FormControl<number | null>;
// }

// type TypedForm = {
//     name: FormControl<string>;
//     favoriteAngularVersion: FormControl<number>;
// }

@Component({
    selector: 'app-basic',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
    @ViewChild('formRef', { static: true }) formRef!: ElementRef<HTMLFormElement>;

    form: FormGroup; //<TypedForm>;

    submitValue$!: Observable<unknown>;
    // submitValue$!: Observable<FormGroup<TypedForm>['value']>;

    constructor() {
        this.form = new FormGroup({
            name: new FormControl('', { validators: Validators.required, initialValueIsDefault: true }),
            favoriteAngularVersion: new FormControl(2, {
                validators: [Validators.min(2), Validators.max(14)],
                initialValueIsDefault: true,
            }),
        });
    }

    ngOnInit(): void {
        this.submitValue$ = fromEvent(this.formRef.nativeElement, 'submit').pipe(map(() => this.form.value));
    }
}
