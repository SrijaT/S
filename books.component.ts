import { Component, OnInit } from '@angular/core';
import { BookListService } from '../book-list.service';
import { BookList } from '../book-list.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  Booklists:BookList[];

  constructor(private Bookservice:BookListService) { }

  ngOnInit() {
    this.Bookservice.getBooklists().subscribe((data)=>this.Booklists=data)
  }

}
