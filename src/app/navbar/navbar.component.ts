import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username:any=''
  ngOnInit(): void {
    const currentUserString: any = sessionStorage.getItem('currentUser');
    let user = currentUserString ? JSON.parse(currentUserString) : null
    console.log(user);
    this.username=user.userFullName;

  }

}
