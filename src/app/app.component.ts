import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fromEvent, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('formRef', { static: true }) formRef!: ElementRef<HTMLFormElement>;

  form: FormGroup;

  submitValue$!: Observable<unknown>;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      favoriteAngularVersion: [2, [Validators.min(2), Validators.max(14)]]
    });
  }

  ngOnInit(): void {
    this.submitValue$ = fromEvent(this.formRef.nativeElement, 'submit').pipe(
      map(() => this.form.value)
    );
  }
}
