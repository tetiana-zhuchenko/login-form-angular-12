import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  onSubmit(formData: NgForm) {
    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;
    if (formData.form.invalid) {
      return;
    }

    console.log(formData.form);
    console.log('formData', enteredEmail, enteredPassword);
  }
}
