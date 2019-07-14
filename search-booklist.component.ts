import { Component, OnInit } from '@angular/core';


import { BookList } from '../book-list.interface';
import { BookListService } from '../book-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-booklist',
  templateUrl: './search-booklist.component.html',
  styleUrls: ['./search-booklist.component.css']
})
export class SearchBooklistComponent implements OnInit {
  Booklists:BookList[];
  searchterm:string;
  usersearch:string;

  constructor(private Bookservice:BookListService,private router:Router) { }

  ngOnInit() {
    this.Bookservice.getBooklists().subscribe((data)=>this.Booklists=data)
  }
onSubmit(){
  this.searchterm=this.usersearch;
}
}
