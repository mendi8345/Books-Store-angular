// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import {Book} from 'src/app/book.model';
// import {FormGroup, AbstractControl, FormControl, Validators} from '@angular/forms';
// import { Router} from '@angular/router';

// @Component({
//   selector: 'app-add-book',
//   templateUrl: './add-book.component.html',
//   styleUrls: ['./add-book.component.css']
// })
// export class AddBookComponent implements OnInit {
// @Output() newBook = new EventEmitter<Book>()
// book:Book={
//   name:'',
//   author:'',
//   publicationYear:'',
//   price:0
// };
// addBookForm: FormGroup;
//   name
//   author
//   publicationYear
//   price



//   constructor( private router:Router) { }

//   ngOnInit() {
//     this.addBookForm = new FormGroup({
//       name: new FormControl('', [Validators.required, Validators.minLength(4)]),
//       author: new FormControl('', [Validators.required]),
//       publicationYear: new FormControl(0, [Validators.required, Validators.min(12)]),
//       price: new FormControl('', [Validators.required])
//     })

//     this.name =  this.addBookForm.get('name');
//     this.author = this.addBookForm.get('author')
//     this.publicationYear = this.addBookForm.get('publicationYear')
//     this.price = this.addBookForm.get('price')

//   }

//   addBook() {
//     console.log(this.name.value)
//     this.book.name=this.name.value
//     this.book.author=this.author.value
//     this.book.price=this.price.value
//     this.book.publicationYear=this.publicationYear.value
//     this.newBook.emit(this.book)
//     this.router.navigate(['/books'])

//   }

// }
