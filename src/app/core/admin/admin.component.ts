import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
data:any=[
  {"book_id":"251","book": {"author":"Harper Lee","title": "To Kill a Mockingbird"}, },
  {"book_id":"252","book": {"author":"George Orwell","title": "1984"}, },
  {"book_id":"253","book": {"author":"F. Scott Fitzgerald","title": "The Great Gatsby"}, },
  {"book_id":"254","book": {"author":"Jane Austen","title": "Pride and Prejudice"}, },
  {"book_id":"255","book": {"author":"J.D. Salinger","title": "The Catcher in the Rye"}, },
  {"book_id":"256","book": {"author":"J.R.R. Tolkien","title": "The Hobbit"}, },
  {"book_id":"257","book": {"author":"J.R.R. Tolkien","title": "The Lord of the Rings"}, },
  {"book_id":"258","book": {"author":"Harper Lee","title": "Harry Potter and the Philosopher's Stone"}, },
  {"book_id":"259","book": {"author":"J.K. Rowling","title": "Moby-Dick"}, },
  {"book_id":"260","book": {"author":"Herman Melville","title": "Jane Eyre"}, },
  {"book_id":"261","book": {"author":"Charlotte Brontë","title": "The Odyssey"}, },
  {"book_id":"262","book": {"author":"Homer","title": "Wuthering Heights"}, },
  {"book_id":"263","book": {"author":"Emily Brontë","title": "The Adventures of Huckleberry Finn"}, },
  {"book_id":"264","book": {"author":"Mark Twain","title": "The Picture of Dorian Gray"}, },
  {"book_id":"265","book": {"author":"Oscar Wilde","title": "Frankenstein"}, },
  {"book_id":"266","book": {"author":"Mary Shelley","title": "The Count of Monte Cristo"}, },
  {"book_id":"267","book": {"author":"Alexandre Dumas","title": "Brave New World"}, },
  {"book_id":"268","book": {"author":"Aldous Huxley","title": "Crime and Punishment"}, },
  {"book_id":"269","book": {"author":"Fyodor Dostoevsky","title": "The Brothers Karamazov"}, },
  {"book_id":"270","book": {"author":"Fyodor Dostoevsky","title": "The Metamorphosis"}, }
]
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
