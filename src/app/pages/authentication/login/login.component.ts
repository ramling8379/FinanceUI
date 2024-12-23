import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { AuthService } from 'src/app/services/core/auth/auth-service.service';
import { LoginService } from 'src/app/services/core/login/login.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class AppLoginComponent {
  options = this.settings.getOptions();
  subscription: Subscription;
  constructor(
    private settings: CoreService,
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService,
    private titleService: Title
  ) {
    sessionStorage.removeItem('authToken');
    this.titleService.setTitle('FinS');
  }

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required])
  });

  get formData() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    if (!this.form.value.uname || !this.form.value.password) {
      return;
    }
    this.subscription = this.loginService
      .login(this.form.value.uname, this.form.value.password)
      .subscribe(
        (res: any) => {
          this.authService.setAuthToken(res.aceess_key);
          sessionStorage.setItem('authToken', res.aceess_key);
          sessionStorage.setItem(
            'userName',
            res.userDto.firstName + ' ' + res.userDto.lastName
          );
          sessionStorage.setItem('userEmail', res.userDto.emailId);
          sessionStorage.setItem('firmId', res.userDto.firmId);
          this.router.navigate(['/starter']);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
