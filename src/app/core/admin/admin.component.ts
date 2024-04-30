import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  search(e: any) {
    return e.value
  }
  
  data: any[] = []; // Declare type as an array
  constructor(private service: AdminService,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.fetchbooks();
  }

  book: any = { bookName: '', author: '', bookCountAvailable: 0 };


  addBook(): void {
    console.log(this.book);
    this.service.addBook(this.book).subscribe((newBook) => {
      console.log('Book added:', newBook);
      this.fetchbooks()
      this.toastr.success('Success!', 'book added successfully!');
      this.addvisible=false
      // Reset the form after successful addition
      this.book = { bookName: '', author: '', bookCountAvailable: 0 };
    });
  }

  fetchbooks() {
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

  deletebook(bookId: any) {
      if (confirm('Are you sure you want to delete this user?'+bookId)) {
        this.service.deleteBook(bookId).subscribe(
          () => {
            console.log('book deleted successfully.');
            this.toastr.success('Success!', 'book deleted successfully!');
  
            // After deleting, fetch updated book list
            this.fetchbooks();
          },
          (error) => {
            console.error('Error deleting book:', error);
          }
        );
      }
    }
  update_id:any=''
  editBook() {

    console.log(this.update_id, this.EditbookData);
    
    this.service.updateBook(this.update_id, this.EditbookData).subscribe(
      () => {
        console.log('book data updated successfully.');
        this.editvisible=false;
        this.toastr.success('Success!', 'book Updated successfully!');

      },
      (error) => {
        console.error('Error updating book data:', error);
        this.toastr.error('Error !!!', 'Error Update book');

      }
    );
  }
  editvisible: boolean = false;
  deletevisible: boolean = false;
  addvisible: boolean = false;

  EditbookData :any = { bookName: '', author: '', bookCountAvailable: 0 };
  EditDialog(item: any) {
    this.editvisible = true;
    this.update_id=item._id;
    this.EditbookData=item;
  }
  DeleteDialog(item: any) {
    console.log('delete');
    this.deletevisible = true;
  }
  AddDialog() {
    this.addvisible = true;
  }
  bookData = { bookFullName: '', email: '', password: '', role: '', mobileNumber: '', gender: '', address: '',dob:'' };


}
