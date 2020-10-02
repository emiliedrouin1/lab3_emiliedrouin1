import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../service/books.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  selectedBook: Book;

  constructor(private route: ActivatedRoute, private booksService: BooksService) {
  }

  getBooks(id: string){
    return this.booksService.getBook(id);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.selectedBook = this.booksService.getBook(id);
    });
  }
}
