import { AuthService } from '@/auth/services/auth.service';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {
   fb = inject(FormBuilder);
    hasError = signal(false)
    isPosting = signal(false)
    router = inject(Router)
  
    authService = inject(AuthService);

      registerForm = this.fb.group({
        fullName:['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });

       onSubmit() {
    if(this.registerForm.invalid){
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 3000)
      return
    }
       const {email, password, fullName} = this.registerForm.value;

    this.authService.register(email!, password!, fullName!)
      .subscribe((isAuthenticated) => {
        if(isAuthenticated) {
          this.router.navigateByUrl('/')
          return
        }
        this.hasError.set(true);
        setTimeout(() => {
        this.hasError.set(false);
      }, 3000)
      })
  }

  

}
