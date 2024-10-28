import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule]
})
export class LoginComponent {
  onSubmit(formData: NgForm) {
    if(formData.form.invalid)
      return;

    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;

    //reset não só dos campos, mas também retorna o estado p/ os valores iniciais, de todos os campos
    formData.form.reset();
  }
}
