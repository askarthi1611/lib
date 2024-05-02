import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  constructor(private service:ProfileService,private toastr: ToastrService,private router: Router){}
  ngOnInit(): void {
    const currentUserString: any = sessionStorage.getItem('currentUser');
    let user = currentUserString ? JSON.parse(currentUserString) : null;
    this.update_id=user._id ;
    this.userData=user;
  }
  update_id:any='';
  userData: any = {
    userFullName: '',
    role: '',
    dob: '',
    gender: '',
    mobileNumber: '',
    email: '',
    address: ''
  };
    onUpdateUser() {
    // console.log(this.update_id, this.userData);
    if (confirm('Are you sure you want to Update this user?\nNeed to Login again.')) {

    this.service.updateUser(this.update_id, this.userData).subscribe(
      () => {
        // console.log('User data updated successfully.');
        this.router.navigate(['/admin'])
        this.toastr.success('Success!', 'User Updated successfully!');
      },
      (error) => {
        // console.error('Error updating user data:', error);
        this.toastr.error('Error !!!', 'Error Update user');
      }
    );}
  }
}
