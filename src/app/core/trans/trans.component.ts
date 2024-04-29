import { Component } from '@angular/core';

@Component({
  selector: 'app-trans',
  templateUrl: './trans.component.html',
  styleUrls: ['./trans.component.css']
})
export class TransComponent {
  data:any=[
    {"book_id":"251","book": {"author":"Harper Lee","title": "To Kill a Mockingbird"}, "borrow_date": "2024-04-01","user":{"username":"Karthikeyan"}, "return_date": "2024-04-15"},
    {"book_id":"252","book": {"author":"George Orwell","title": "1984"}, "borrow_date": "2024-04-03","user":{"username":"Hari"}, "return_date": "2024-04-17"},
    {"book_id":"253","book": {"author":"F. Scott Fitzgerald","title": "The Great Gatsby"}, "borrow_date": "2024-04-05","user":{"username":"Ram"}, "return_date": "2024-04-19"},
    {"book_id":"254","book": {"author":"Jane Austen","title": "Pride and Prejudice"}, "borrow_date": "2024-04-07","user":{"username":"Kumar"}, "return_date": "2024-04-21"},
    {"book_id":"255","book": {"author":"J.D. Salinger","title": "The Catcher in the Rye"}, "borrow_date": "2024-04-09","user":{"username":"Walter"}, "return_date": "2024-04-23"},
    {"book_id":"256","book": {"author":"J.R.R. Tolkien","title": "The Hobbit"}, "borrow_date": "2024-04-11","user":{"username":"Revanth"}, "return_date": "2024-04-25"},
    {"book_id":"257","book": {"author":"J.R.R. Tolkien","title": "The Lord of the Rings"}, "borrow_date": "2024-04-13","user":{"username":"Karthikeyan"}, "return_date": "2024-04-27"},
    {"book_id":"258","book": {"author":"Harper Lee","title": "Harry Potter and the Philosopher's Stone"}, "borrow_date": "2024-04-15","user":{"username":"Hari"}, "return_date": "2024-04-29"},
    {"book_id":"259","book": {"author":"J.K. Rowling","title": "Moby-Dick"}, "borrow_date": "2024-04-17","user":{"username":"Ram"}, "return_date": "2024-05-01"},
    {"book_id":"260","book": {"author":"Herman Melville","title": "Jane Eyre"}, "borrow_date": "2024-04-19","user":{"username":"Kumar"}, "return_date": "2024-05-03"},
    {"book_id":"261","book": {"author":"Charlotte Brontë","title": "The Odyssey"}, "borrow_date": "2024-04-21","user":{"username":"Walter"}, "return_date": "2024-05-05"},
    {"book_id":"262","book": {"author":"Homer","title": "Wuthering Heights"}, "borrow_date": "2024-04-23","user":{"username":"Revanth"}, "return_date": "2024-05-07"},
    {"book_id":"263","book": {"author":"Emily Brontë","title": "The Adventures of Huckleberry Finn"}, "borrow_date": "2024-04-25","user":{"username":"Karthikeyan"}, "return_date": "2024-05-09"},
    {"book_id":"264","book": {"author":"Mark Twain","title": "The Picture of Dorian Gray"}, "borrow_date": "2024-04-27","user":{"username":"Hari"}, "return_date": "2024-05-11"},
    {"book_id":"265","book": {"author":"Oscar Wilde","title": "Frankenstein"}, "borrow_date": "2024-04-29","user":{"username":"Ram"}, "return_date": "2024-05-13"},
    {"book_id":"266","book": {"author":"Mary Shelley","title": "The Count of Monte Cristo"}, "borrow_date": "2024-05-01","user":{"username":"Kumar"}, "return_date": "2024-05-15"},
    {"book_id":"267","book": {"author":"Alexandre Dumas","title": "Brave New World"}, "borrow_date": "2024-05-03","user":{"username":"Walter"}, "return_date": "2024-05-17"},
    {"book_id":"268","book": {"author":"Aldous Huxley","title": "Crime and Punishment"}, "borrow_date": "2024-05-05","user":{"username":"Revanth"}, "return_date": "2024-05-19"},
    {"book_id":"269","book": {"author":"Fyodor Dostoevsky","title": "The Brothers Karamazov"}, "borrow_date": "2024-05-07","user":{"username":"Karthikeyan"}, "return_date": "2024-05-21"},
    {"book_id":"270","book": {"author":"Fyodor Dostoevsky","title": "The Metamorphosis"}, "borrow_date": "2024-05-09","user":{"username":"Karthikeyan"}, "return_date": "2024-05-23"}
  ]
  search(e:any){
    return e.value
  }
}
