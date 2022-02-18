import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { fromEvent, map, Observable, Subject, takeUntil, tap } from 'rxjs';

@Component({
    selector: 'app-dynamic-controls',
    templateUrl: './dynamic-controls.component.html',
    styleUrls: ['./dynamic-controls.component.scss'],
})
export class DynamicControlsComponent implements OnInit, OnDestroy {
    @ViewChild('formRef', { static: true }) formRef!: ElementRef<HTMLFormElement>;

    form: FormGroup; //<TypedForm>;

    submitValue$!: Observable<unknown>;
    // submitValue$!: Observable<FormGroup<TypedForm>['value']>;

    showRantInput$!: Observable<boolean>;

    private readonly unsubscribe$ = new Subject<void>();

    constructor() {
        this.form = new FormGroup({
            feedback: new FormControl(''),
            hasHardOpinion: new FormControl(false),
        });
    }

    ngOnInit(): void {
        this.submitValue$ = fromEvent(this.formRef.nativeElement, 'submit').pipe(map(() => this.form.value));

        this.showRantInput$ = this.form.controls['hasHardOpinion'].valueChanges.pipe(
            tap((mustRant) => {
                if (mustRant) {
                    this.form.addControl('rant', new FormControl(''));
                } else {
                    this.form.removeControl('rant');
                }
            }),
        );
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
