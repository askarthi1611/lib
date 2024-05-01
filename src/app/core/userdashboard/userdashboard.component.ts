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
    let newbooklist:any=[]
    item.bookCountAvailable += 1;
    this.data.map((e:any,l:any)=>{
      if (e._id != item._id) {
        newbooklist.push(e)        
      }
    })
    this.data=newbooklist;
    this.user.borrowBook=newbooklist;
    let bookreturn= {
      user:this.user,
      book:item
    }
    
    this.service.updateBookUser(bookreturn).subscribe(
      (response: any) => {
        console.log(response);
        // Assuming the API responds directly with an array of user
        sessionStorage.setItem('currentUser', JSON.stringify(this.user));
        this.fetchpage()
        console.log('Updated user:', this.data);
        
      },
      (error: any) => {
        console.error('Error fetching user:', error);
      }
    ); 
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
        // Assuming the API responds directly with an array of user
        this.data = response.borrowBook; // No need for response.user if the API already returns an array of user
        console.log('Fetched user:', this.data);

      },
      (error: any) => {
        console.error('Error fetching user:', error);
      }
    ); 
  }
  search(e:any){
    return e.value
  }
}
