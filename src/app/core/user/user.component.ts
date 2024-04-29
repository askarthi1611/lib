import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  data:any=[{
        "address": "Chennai",
        "activeTransactions": [],
        "prevTransactions": [],
        "isAdmin": true,
        "_id": "662fc582b1d1910a28a319ce",
        "userFullName": "Karthi",
        "dob": "20-03-2000",
        "gender": "Male",
        "mobileNumber": 7708550202,
        "email": "askarthi@gmail.com",
        "password": "$2b$10$tHksjbKrYT23DjSsUTbRO.qwlJTBBin628CeyfIGoT/WaExPh6t1e",
        "createdAt": "2024-04-29T16:06:26.730Z",
        "updatedAt": "2024-04-29T16:06:26.730Z",
        "__v": 0
    }]
  search(e:any){
    return e.value
  }
  editvisible: boolean = false;
deletevisible: boolean = false;
addvisible: boolean = false;

EditDialog(item:any) {
    this.editvisible = true;
}
DeleteDialog(item:any) {
    this.deletevisible = true;
}
AddDialog(item:any) {
    this.addvisible = true;
}

}
