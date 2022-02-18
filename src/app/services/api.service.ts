import { Injectable } from '@angular/core';
import { mapTo, Observable, timer } from 'rxjs';

export interface UndefinedAmount {
    currency?: never;
}

export interface Amount {
    currency: {
        amount: number;
        symbol: string;
    };
}

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    doRequest(): Observable<Amount | UndefinedAmount> {
        return timer(3000).pipe(mapTo({}));
    }
}
