import { Pipe, PipeTransform } from '@angular/core';
import {BookList} from './book-list.interface';

@Pipe({
  name: 'booklistpipe'
})
export class BooklistpipePipe implements PipeTransform {

  transform(Booklists:BookList[],searchterm:string):any {
    if(!Booklists||searchterm)
    return Booklists;
    return Booklists.filter(s=>(s.BookId.toString()==searchterm
    ||s.BookAuthor.toLocaleLowerCase().startsWith(searchterm.toLocaleLowerCase())
    ||s.BookTitle.toLowerCase().startsWith(searchterm.toLowerCase())
    ||s.BookYearOfPublic.toString()==searchterm
    ||s.Category.toLowerCase().startsWith(searchterm.toLowerCase())));
  }

}
