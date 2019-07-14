import { Component, OnInit } from '@angular/core';
import { BookList } from '../book-list.interface';
import { BookListService } from '../book-list.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:BookList[];
  constructor(private bookservice:BookListService){}


  ngOnInit() {
    this.bookservice.getDetails().subscribe(data=>this.books=data)
  }
  ByDelete(obj)
  {
    let val=this.books.indexOf(obj);
    this.books.splice(val,1);
  }

}
