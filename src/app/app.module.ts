import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';
import { BookComponent } from './components/books/books-list/book/book.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
// import { AddBookComponent } from './components/books/add-book/add-book.component';
import { BooksComponent } from './components/books/books.component';
import { BookDetailComponent } from './components/books/book-detail/book-detail.component';
import {BookService} from './book.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookComponent,
    HeaderComponent,
    ShoppingCartComponent,
    // AddBookComponent,
    BooksComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     ReactiveFormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
