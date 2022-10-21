import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ListBookComponent } from './component/list-book/list-book.component';
import { CreateBookComponent } from './component/create-book/create-book.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientHeaderComponent } from './component/client-header/client-header.component';
import { AppHeaderComponent } from './component/app-header/app-header.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { BookSalesComponent } from './component/book-sales/book-sales.component';
import { BookByCategoryComponent } from './component/book-by-category/book-by-category.component';
import { BookByAuthorComponent } from './component/book-by-author/book-by-author.component';
import { BookByTitleComponent } from './component/book-by-title/book-by-title.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListBookComponent,
    CreateBookComponent,
    ClientHeaderComponent,
    AppHeaderComponent,
    HomePageComponent,
    BookSalesComponent,
    BookByCategoryComponent,
    BookByAuthorComponent,
    BookByTitleComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
