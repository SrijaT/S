import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import {BookList} from './book-list.interface';

@Injectable({
  providedIn: 'root'
})
export class BookListService {
  [x: string]: any;
  getBooklists():Observable<BookList[]>{
    return this.http.get<BookList[]>("./assets/db.json");

  }

  constructor(private http:HttpClient) { }
}
