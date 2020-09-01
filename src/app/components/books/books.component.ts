import { Component, OnInit } from '@angular/core';
import {Book} from 'src/app/book.model';
import {BookService} from 'src/app/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  selectedBook: Book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.bookSelected
      .subscribe(
        (book: Book) => {
          this.selectedBook = book;
        }
      );
  }

}
