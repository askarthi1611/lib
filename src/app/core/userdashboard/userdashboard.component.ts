import { Component } from '@angular/core';
import { UserdashboardService } from './userdashboard.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {
  data:any=[];
  user:any;
  return_book(item:any){
    console.log(item);
  }
  constructor(private service: UserdashboardService,private toastr: ToastrService) {}

  ngOnInit(): void {
    const currentUserString: any = sessionStorage.getItem('currentUser');
    this.user = currentUserString ? JSON.parse(currentUserString) : null
    this.fetchpage();
  }
  fetchpage(){
    this.service.getUser(this.user._id).subscribe(
      (response: any) => {
        console.log(response);
        // Assuming the API responds directly with an array of books
        this.data = response; // No need for response.books if the API already returns an array of books
        console.log('Fetched books:', this.data);

      },
      (error: any) => {
        console.error('Error fetching books:', error);
      }
    ); 
  }
  search(e:any){
    return e.value
  }
}
