import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Book} from 'src/app/book.model';
import {BookService} from 'src/app/book.service';
import {RouterLink, Router} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() book: Book;


  constructor(private bookService: BookService,private router:Router) { }

  ngOnInit() {
    console.log("hiiiiiiiiiiiiiii")
  }

  addToCart(){
    // this.bookService.onAddToCart.emit(this.book)
    this.bookService.cartBooks.push(this.book)
    alert(this.book.title+" Successfully added to shopping list")
    // this.router.navigate(['add-to-cart'])

  }
  // onAddToShoppingList() {
  //   this.bookService.addIngredientsToShoppingList(this.recipe.ingredients);
  // }
}
