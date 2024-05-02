import { Component } from '@angular/core';
import { TransService } from './trans.service';

@Component({
  selector: 'app-trans',
  templateUrl: './trans.component.html',
  styleUrls: ['./trans.component.css'],
})
export class TransComponent {
  constructor(private service: TransService) {}
  data: any = [];
  search(e: any) {
    return e.value;
  }
  ngOnInit(): void {
    this.fetchMembers();
  }

  fetchMembers() {
    this.service.getAllMembers().subscribe(
      (response: any) => {
        // console.log(response);
        let newdata :any = [];
        response.map((e: any, l: any) => {
          if (e.borrowBook.length) {
            e.borrowBook.map((i: any, j: any) => {
              i.user = {'username':e.userFullName};
            });
            newdata.push(...e.borrowBook);
          }
        });
        // console.log(newdata);
        // Assuming the API responds directly with an array of members
        this.data = newdata; // No need for response.members if the API already returns an array of members
        // console.log('Fetched members:', this.data,newdata);
      },
      (error: any) => {
        // console.error('Error fetching members:', error);
      }
    );
  }
}
