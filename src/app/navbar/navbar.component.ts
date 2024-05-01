import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username:any=''
  constructor(private router: Router){}
  ngOnInit(): void {
    const currentUserString: any = sessionStorage.getItem('currentUser');
    let user = currentUserString ? JSON.parse(currentUserString) : null
    console.log(user);
    this.username=user.userFullName;

  }
  logout(){
    sessionStorage.removeItem('currentUser');

    // Navigate to the login page
    this.router.navigate(['/']);
  }

}
