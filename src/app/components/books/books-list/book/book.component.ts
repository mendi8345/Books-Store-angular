import { Component, OnInit, Input } from '@angular/core';
import{ Book } from  '../../../../book.model';
import {BookService} from 'src/app/book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
@Input()book:Book;


constructor(private bookService: BookService) { }

ngOnInit() {
}

onSelected() {
  this.bookService.bookSelected.emit(this.book);
}

}
