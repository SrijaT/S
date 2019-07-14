import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooklistpipePipe } from './booklistpipe.pipe';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { BooksComponent } from './books/books.component';
import { SearchBooklistComponent } from './search-booklist/search-booklist.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BooklistpipePipe,
    AppRoutingComponent,
    BooksComponent,
    SearchBooklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
