import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router'; 
import 'rxjs/add/operator/switchMap'

import { BookService } from './book.service';
import { Book } from './book';

@Component({
   templateUrl: './book-update.component.html',
   styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit { 
  book: Book;
  constructor(private bookService: BookService,
           private router: Router,
           private route: ActivatedRoute) {
  }
  ngOnInit() {
       this.route.params
        .switchMap((params: Params) => this.bookService.getBook(+params['book-id']))
        .subscribe(book => this.book = book);
  }
  update() {
     this.router.navigate([{ outlets: { bookPopup: null }}]);
  }
} 