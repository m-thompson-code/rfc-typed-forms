import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fromEvent, map, Observable } from 'rxjs';

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
    @ViewChild('formRef', { static: true }) formRef!: ElementRef<HTMLFormElement>;
    @ViewChild('formRef2', { static: true }) formRef2!: ElementRef<HTMLFormElement>;

    form: FormGroup;
    form2: FormGroup;

    submitValue$!: Observable<unknown>;
    submitValue2$!: Observable<unknown>;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            name: ['', Validators.required],
            favoriteAngularVersion: [2, [Validators.min(2), Validators.max(14)]],
        });

        this.form2 = this.fb.group({
            name: ['', Validators.required],
            favoriteAngularVersion: [2, [Validators.min(2), Validators.max(14)]],
        });
    }

    ngOnInit(): void {
        this.submitValue$ = fromEvent(this.formRef.nativeElement, 'submit').pipe(map(() => this.form.value));
        this.submitValue2$ = fromEvent(this.formRef2.nativeElement, 'submit').pipe(map(() => this.form2.value));
    }
}
