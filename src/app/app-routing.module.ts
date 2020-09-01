import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksListComponent} from './components/books/books-list/books-list.component';
import {BookComponent} from './components/books/books-list/book/book.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {BooksComponent} from './components/books/books.component';
import {BookDetailComponent} from './components/books/book-detail/book-detail.component';
// import {AddBookComponent} from './components/books/add-book/add-book.component';


const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent  },
  { path: 'add-to-cart', component: ShoppingCartComponent },
  { path: '#', component: BooksComponent }
  // { path: 'book/:name', component: BookComponent }
  // { path: 'add-book', component: AddBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
