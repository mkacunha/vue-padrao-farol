export default class FormDecorator {
    private component: any;

    constructor(component: any) {        
        this.component = component;
    }

    get form(): any {
        if (!this.component.$refs || !this.component.$refs.form) {
            throw new Error('$refs or form is not initialized.');
        }
        return this.component.$refs.form;
    }

    get value(): boolean {
        return this.form.value;
    }

    public reset(): void {
        this.form.reset();
    }

    public resetValidation(): void {
        this.form.resetValidation();
    }

    public validate(): boolean {
        return this.form.validate();
    }
}