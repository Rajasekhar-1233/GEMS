import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SpinnerService } from '../../providers/spinner/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  returnUrl: string;

  constructor(private fb: FormBuilder,
    public spinner: SpinnerService,
    private router: Router,
    public toastController: ToastController,) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
      ]))

    })
    this.spinner.hideSpinner();
  }

  onSubmit() {
    this.validation_messages['authError']['message'] = '';
    if (this.loginForm.invalid) {
      return;
    }
    this.spinner.showSpinner();
    this.submitted = true;
    let data = this.loginForm.value;
    let loginData = {
      email: data.email,
      Password: data.password,
    }
    if (loginData.email === "admin@gleason.com" && loginData.Password === "admin@123") {
      this.router.navigate(['/tracking']);
    }
    this.loading = true;

  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
    ],
    'authError':
    {
      type: 'server', message: ''
    }

  };

}
