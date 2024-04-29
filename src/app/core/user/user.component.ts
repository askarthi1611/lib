import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  data:any=[
    {"username":"Karthikeyan","dob":"16/11/1999","role":"Admin"},
    {"username":"Hari","dob":"16/09/1995","role":"User"},
    {"username":"Ram","dob":"29/09/2001","role":"User"},
    {"username":"Kumar" ,"dob":"30/12/1868","role":"Admin"},
    {"username":"Walter","dob":"04/11/1988","role":"User"},
    {"username":"Revanth","dob":"25/05/1995","role":"User"},
  ]
  search(e:any){
    return e.value
  }
}
