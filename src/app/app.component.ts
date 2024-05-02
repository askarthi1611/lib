import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router){}
  ngOnInit(): void {
    const currentUserString: any = sessionStorage.getItem('currentUser');
    let user = currentUserString ? JSON.parse(currentUserString) : null;
    // console.log(user);
    if (!user) {
      this.router.navigate(['/'])
    }
  }
  title = 'lib';
}
