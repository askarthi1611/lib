import { Component } from '@angular/core';
import { BorrowService } from './borrow.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent {
  search(e: any) {
    return e.value
  }
  
  data: any[] = []; // Declare type as an array
  constructor(private service: BorrowService,private toastr: ToastrService) {}
  user : any = {}

  ngOnInit(): void {
    const currentUserString: any = sessionStorage.getItem('currentUser');
    this.user = currentUserString ? JSON.parse(currentUserString) : null
    this.fetchbooks();
  }
  fetchbooks(){
    this.service.getAllBooks().subscribe(
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
  borrowbook(item:any){
    if (confirm('Are you sure you want to Borrow this Book?'+item.bookName)) {
      item.bookCountAvailable -= 1;
      this.user.borrowBook.push(item)
      let bookborrow = {
        user:this.user,
        book:item
      }
      console.log(bookborrow);
      this.service.updateBookUser(bookborrow).subscribe(
        (response: any) => {
          console.log(response);
          this.toastr.success('Success!', 'User and Book updated successfully!');

          // Assuming the API responds directly with an array of books 
        },
        (error: any) => {
          console.error('Error fetching books:', error);
        }
      );
    }
  }
  
}
