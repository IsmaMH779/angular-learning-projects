import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-register-page',
  imports: [JsonPipe, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './register-page.html',
})
export class RegisterPage {

  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.pattern(this.formUtils.namePattern)]],
    email: ["", [Validators.required, Validators.pattern(this.formUtils.emailPattern)], [FormUtils.checkingServerResponse]],
    username: ["", [Validators.required, Validators.minLength(6), Validators.pattern(this.formUtils.notOnlySpacesPattern), FormUtils.notStrider]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    confirmPassword: ["", Validators.required],
  }, {
    validators: [this.formUtils.isFieldOneEqualFielTwo("password", "confirmPassword")]
  });



  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
