import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';
import { Amount, ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-dealing-with-errors',
    templateUrl: './dealing-with-errors.component.html',
    styleUrls: ['./dealing-with-errors.component.scss'],
})
export class DealingWithErrorsComponent implements OnInit, OnDestroy {
    readonly form: FormGroup;

    showMeanComment: boolean = false;

    private readonly unsubscribe$ = new Subject<void>();

    loading = true;

    constructor(private fb: FormBuilder, private apiService: ApiService) {
        this.form = this.fb.group({
            amount: [],
        });
    }

    ngOnInit(): void {
        this.apiService
            .doRequest()
            .pipe(
                tap((amount) => {
                    this.form.setValue({ amount: amount });

                    this.setShowMeanComment(this.form.controls['amount'].value);

                    this.loading = false;
                }),
                takeUntil(this.unsubscribe$),
            )
            .subscribe();
    }

    setShowMeanComment(amount: Amount): void {
        this.showMeanComment = amount.currency.amount <= 0;
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
