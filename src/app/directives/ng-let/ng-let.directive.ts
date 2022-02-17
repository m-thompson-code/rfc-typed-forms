import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export class NgLetContext<T = unknown> {
    public $implicit: T = null!;
    public ngLet: T = null!;
}

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[ngLet]',
})
export class NgLetDirective<T = unknown> {
    private context: NgLetContext<T> = new NgLetContext<T>();
    private templateRef: TemplateRef<NgLetContext<T>> | null = null;
    private viewRef: EmbeddedViewRef<NgLetContext<T>> | null = null;

    constructor(private viewContainer: ViewContainerRef, templateRef: TemplateRef<NgLetContext<T>>) {
        this.templateRef = templateRef;
    }

    /**
     * The Boolean expression to evaluate as the condition for showing a template.
     */
    @Input()
    set ngLet(value: T) {
        this.context.$implicit = this.context.ngLet = value;
        this.updateView();
    }

    private updateView() {
        if (this.viewRef) {
            return;
        }

        this.viewContainer.clear();

        if (this.templateRef) {
            this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef, this.context);
        }
    }

    /** @internal */
    public static ngLetUseLetTypeGuard: void;

    /**
     * Assert the correct type of the expression bound to the `ngLet` input within the template.
     *
     * The presence of this static field is a signal to the Ivy template type check compiler that
     * when the `NgLet` structural directive renders its template, the type of the expression bound
     * to `ngLet` should be narrowed in some way. For `NgLet`, the binding expression itself is used to
     * narrow its type, which allows the strictNullChecks feature of TypeScript to work with `NgLet`.
     */
    static ngTemplateGuard_ngLet: 'binding';

    /**
     * Asserts the correct type of the context for the template that `NgIf` will render.
     *
     * The presence of this method is a signal to the Ivy template type-check compiler that the
     * `NgIf` structural directive renders its template with a specific context type.
     */
    static ngTemplateContextGuard<T>(dir: NgLetDirective<T>, ctx: NgLetContext<T>): ctx is NgLetContext<T> {
        return true;
    }
}
