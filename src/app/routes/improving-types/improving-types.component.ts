import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent, map, Observable } from 'rxjs';

// type SetValueOptions = { onlySelf?: boolean | undefined; emitEvent?: boolean | undefined };

// type NullishValues<Values> = {
//     [Key in keyof Values]: Values[Key] | null;
// };

// type CustomControls<Values> = {
//     [Key in keyof Values]?: {
//         value: Values[Key] | null;
//     } & Omit<AbstractControl, 'value'>;
// };

// type OverrideFormGroup<Values> = {
//     controls: CustomControls<Values>;
//     value: Partial<NullishValues<Values>>;
//     getRawValue: () => NullishValues<Values>;
//     setValue: (values: Partial<NullishValues<Values>>, options?: SetValueOptions) => void;
// };

// type CustomFormGroup<Values> = OverrideFormGroup<Values> & FormGroup;

// type MyFormGroup = CustomFormGroup<{ name: string; favoriteAngularVersion: number }>;

// class PrivateAbstractControlProps {
//     private _parent!: any;
//     private _asyncValidationSubscription!: any;
//     private __updateAncestors!: any;
//     private _setInitialStatus!: any;
//     private _runValidator!: any;
//     private _runAsyncValidator!: any;
//     private _cancelExistingSubscription!: any;
// }

@Component({
    selector: 'app-improving-types',
    templateUrl: './improving-types.component.html',
    styleUrls: ['./improving-types.component.scss'],
})
export class ImprovingTypesComponent implements OnInit {
    @ViewChild('formRef', { static: true }) formRef!: ElementRef<HTMLFormElement>;

    form: FormGroup;

    submitValue$!: Observable<FormGroup['value']>;

    constructor(private fb: FormBuilder) {
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            favoriteAngularVersion: new FormControl(2, [Validators.min(2), Validators.max(14)]),
        });
        // this.form = this.fb.group({
        //     name: ['', Validators.required],
        //     favoriteAngularVersion: [2, [Validators.min(2), Validators.max(14)]],
        // }) as MyFormGroup;

        // this.form.controls.['favoriteAngularVersion']?.value;

        // this.form.value;
    }

    ngOnInit(): void {
        this.submitValue$ = fromEvent(this.formRef.nativeElement, 'submit').pipe(map(() => this.form.value));
    }
}
