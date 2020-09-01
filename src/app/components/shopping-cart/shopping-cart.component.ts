import { Component, OnInit } from '@angular/core';
import {Book} from 'src/app/book.model';
import {BookService} from 'src/app/book.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
books:Book[];
book:Book;
totalPrice:number=0;
  constructor(private bookService:BookService) {

   }

  ngOnInit() {
    this.books=this.bookService.cartBooks
    for(let book of this.books)
    this.totalPrice+=book.price
    // this.bookService.onAddToCart
    // .subscribe(
    //   (book: Book) => {
    //     console.log("book =",book)
    //     this.books.push(book);
    //     this.book=this.books[0]
    //     console.log(this.books)
    //   }
    // );
}
onClickDelete(index) {
  // this.delete.emit()
  this.totalPrice-=this.books[index].price

  this.books.splice(index,1)
  // this.bookService.deleteMessage(this.index)
}

}
