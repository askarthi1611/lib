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
    this.username=user.userFullName;
    // Function to update the current time
    let time : any = document.getElementById('currentTime');
    function updateTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const dateTimeString = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
      time.textContent = dateTimeString;
    }

    // Update the time every second
    setInterval(updateTime, 1000);

    // Initial call to display the time immediately
    updateTime();
  }
  logout(){
    sessionStorage.removeItem('currentUser');

    // Navigate to the login page
    this.router.navigate(['/']);
  }

}
