import { Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(public injector: Injector,private renderer: Renderer2,private service:AuthService,private router: Router,private toastr: ToastrService) {
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
    try {
      if (this.loginForm.invalid) {
        // Handle invalid form data
        return;
      }
      this.isLoading=true
      const formData = this.loginForm.value;
      const response = await this.service.login(formData).toPromise();
// console.log(response);
setTimeout(() => {
  this.isLoading=false

      // Handle response from the login service
      // console.log('Login successful:', response);
      // Redirect or show success message
      sessionStorage.setItem('currentUser', JSON.stringify(response));
      if (response.role=='admin') {
        this.router.navigate(['/admin'])
      } else {
        this.router.navigate(['/userdashboard'])
      }
}, 2000);
    } catch (error) {
      // Handle login error
      // console.error('Error logging in:', error);
      // Show error message or handle error
    }
  }
  createLoginForm() {
    this.loginForm = this.fb.group({
      userFullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      password: ['', [Validators.required]],
    });
  }




  get f(): any { return this.loginForm.controls; }
  getErrorMessage(options: any): string {
    const { fieldName, fieldErrors, minLength, maxLength } = options;
    const errors = fieldErrors || {};
    
    if (errors.required) {
      return `${fieldName} is required`;
    } else if (errors.minlength) {
      return `${fieldName} must be at least ${minLength} characters`;
    } else if (errors.maxlength) {
      return `${fieldName} must not exceed ${maxLength} characters`;
    }
    return '';
  }
  getuserFullNameErrorMessage() {
    return this.getErrorMessage({
      fieldName: 'User name',
      fieldErrors: this.f.userFullName.errors,
      minLength: 2,
      maxLength: 50,
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
        // console.error(error);
        // this.toastr.error(error);
      }
    }
  }
  userData: any = {
    userFullName: '',
    role: '',
    dob: '',
    gender: '',
    mobileNumber: '',
    email: '',
    address: ''
  };
  onRegister(){
    // console.log(this.userData);
      
    this.service.registerUser(this.userData).subscribe(
      (response) => {
        // console.log('User registered successfully:', response);
        this.toastr.success('Success!', 'User registered successfully!');
        this.backtologin()
    },
    (error) => {
      // console.error('Error registering user:', error);
      this.toastr.error('Error !!!', 'Error registering user');
      // Add any error handling logic here
    }
    );
  
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
