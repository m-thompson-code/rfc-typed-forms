import { Component, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// type TypedForm = {
//     name: FormControl<string | null>;
//     favoriteAngularVersion: FormControl<number | null>;
// };

// type TypedForm2 = {
//     name: AbstractControl<string | null, string | null>;
//     favoriteAngularVersion: AbstractControl<number | null, number | null>;
// };

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent {
    @ViewChild('formRef', { static: true }) formRef!: ElementRef<HTMLFormElement>;
    @ViewChild('formRef2', { static: true }) formRef2!: ElementRef<HTMLFormElement>;

    form: FormGroup; // <TypedForm>;
    form2: FormGroup; // <TypedForm2>;

    constructor(private readonly fb: FormBuilder) {
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            favoriteAngularVersion: new FormControl(2, [Validators.min(2), Validators.max(14)]),
        });

        this.form2 = this.fb.group({
            name: ['', Validators.required],
            favoriteAngularVersion: [2, [Validators.min(2), Validators.max(14)]],
        });
    }
}
