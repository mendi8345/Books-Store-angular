import { Component, OnInit, Input } from '@angular/core';
import {Book} from 'src/app/book.model';
import {BookService} from 'src/app/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  @Input() books: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  // onSelected() {
  //   this.bookService.bookSelected.emit(this.book);
  // }

  // constructor() {}
  // books:Book[]=[{
  //   id:0,
  //   name:'aba',
  //   author:'aharon',
  //   publicationYear:'1993',
  //   price:35}]

  // ngOnInit() {
  // }
  // addBook(book:Book){
  //   console.log("inside add book book =",book)
  //   this.books.push(book)
  // }

}
