import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  search(e: any) {
    return e.value
  }
  
  data: any[] = []; // Declare type as an array
  constructor(private service: UserService,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.fetchMembers();
  }

  fetchMembers() {
    this.service.getAllMembers().subscribe(
      (response: any) => {
        console.log(response);
        // Assuming the API responds directly with an array of members
        this.data = response; // No need for response.members if the API already returns an array of members
        console.log('Fetched members:', this.data);
      },
      (error: any) => {
        console.error('Error fetching members:', error);
      }
    );
  }
  onSubmit() {
    // Call your registration service to register the user
    // console.log(this.userData); // For testing, replace this with actual registration logic
      console.log(this.userData);
      
      this.service.registerUser(this.userData).subscribe(
        (response) => {
        console.log('User registered successfully:', response);
        this.toastr.success('Success!', 'User registered successfully!');
        this.fetchMembers();
        this.addvisible=false
      },
      (error) => {
        console.error('Error registering user:', error);
        this.toastr.error('Error !!!', 'Error registering user');
        // Add any error handling logic here
      }
      );
    
  }
  deleteUser(userId: string) {
    if (confirm('Are you sure you want to delete this user?'+userId)) {
      this.service.deleteUser(userId).subscribe(
        () => {
          console.log('User deleted successfully.');
          this.toastr.success('Success!', 'User deleted successfully!');

          // After deleting, fetch updated user list
          this.fetchMembers();
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }
  }
  update_id:any=''
  onUpdateUser() {
    console.log(this.update_id, this.EdituserData);
    
    this.service.updateUser(this.update_id, this.EdituserData).subscribe(
      () => {
        console.log('User data updated successfully.');
        this.editvisible=false;
        this.toastr.success('Success!', 'User Updated successfully!');

        // Handle success
      },
      (error) => {
        console.error('Error updating user data:', error);
        this.toastr.error('Error !!!', 'Error Update user');

        // Handle error
      }
    );
  }
  editvisible: boolean = false;
  deletevisible: boolean = false;
  addvisible: boolean = false;

  EdituserData = { userFullName: '', email: '', password: '', role: '', mobileNumber: '', gender: '', address: '',dob:'' };
  EditDialog(item: any) {
    this.editvisible = true;
    this.update_id=item._id;
    this.EdituserData=item;
  }
  DeleteDialog(item: any) {
    console.log('delete');
    this.deletevisible = true;
  }
  AddDialog() {
    this.addvisible = true;
  }
  userData = { userFullName: '', email: '', password: '', role: '', mobileNumber: '', gender: '', address: '',dob:'' };


}
