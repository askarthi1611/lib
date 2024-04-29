import { Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(public injector: Injector,private renderer: Renderer2) {
    this.createLoginForm()
   
   }

  password_view(id:any,e:any) {    
    id.type = id.type=='password' ? "text" : "password";
    e.srcElement.src = id.type=='password' ? "/assets/images/pwd_show.png" : "/assets/images/pwd_hide.png";
  }
  
  public loginForm: any;
  public singupForm: any;
  signin :any = true;
  isLoading: any = false;
  fb = this.injector.get(FormBuilder)
  fb1 = this.injector.get(FormBuilder)
  passwd_view: any = true;
  passwd_type: any = "password";
  passwd_img: any = "/assets/images/pwd_hide.png"
  async submitLogin() {
    console.log(this.loginForm.value);    
    if (this.loginForm.status!='INVALID') {
      // this.toastr.success('success');
      return;
    } else {
      try {} catch (error: any) {
        console.error(error);
        // this.toastr.error(error);
      }
    }
  }
  createLoginForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      password: ['', [Validators.required],Validators.minLength(4)],
    });
  }
  createsingupForm() {
    this.singupForm = this.fb1.group({
      userName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      password: ['', [Validators.required,Validators.minLength(4)]],
      conformpassword: ['', [Validators.required,Validators.minLength(4)]],
    });
  }
  async submitsignup() {
    if (this.singupForm.invalid) {
      // this.toastr.success('success');
      return;
    } else {
      try {} catch (error: any) {
        console.error(error);
        // this.toastr.error(error);
      }
    }
  }


  get f(): any { return this.loginForm.controls; }
  getErrorMessage(options: any): string {
    const { fieldName, fieldErrors, minLength, maxLength } = options;
    const errors = fieldErrors || {};
    console.log(errors);
    
    if (errors.required) {
      return `${fieldName} is required`;
    } else if (errors.minlength) {
      return `${fieldName} must be at least ${minLength} characters`;
    } else if (errors.maxlength) {
      return `${fieldName} must not exceed ${maxLength} characters`;
    }
    return '';
  }
  getUserNameErrorMessage() {
    return this.getErrorMessage({
      fieldName: 'User name',
      fieldErrors: this.f.userName.errors,
      minLength: 2,
      maxLength: 50,
    });
  }
  
  getPasswordErrorMessage() {
    return this.getErrorMessage({
      fieldName: 'Password',
      minLength: 2,
      maxLength: 50,
      fieldErrors: this.f.password.errors,
    });
  }

  gotoregister(){
  this.signin=false;
  setTimeout(() => {
    this.createsingupForm();
  }, 2000);
}
  backtologin(){
  this.signin=true;
}
  ngOnInit(): void {
    this.renderer.addClass(document.body, 'login_body');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'login_body');
  }
}
