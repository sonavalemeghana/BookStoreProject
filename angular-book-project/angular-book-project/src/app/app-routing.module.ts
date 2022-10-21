import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { BookByAuthorComponent } from './component/book-by-author/book-by-author.component';
import { BookByCategoryComponent } from './component/book-by-category/book-by-category.component';
import { BookByTitleComponent } from './component/book-by-title/book-by-title.component';
import { BookSalesComponent } from './component/book-sales/book-sales.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { CreateBookComponent } from './component/create-book/create-book.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ListBookComponent } from './component/list-book/list-book.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'book-list', component: ListBookComponent },
  { path: 'create-book', component: CreateBookComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'sale/:id', component: BookSalesComponent },
  { path: 'book-by-category', component: BookByCategoryComponent},
  { path: 'book-by-author', component: BookByAuthorComponent},
  { path: 'book-by-title', component: BookByTitleComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact-us', component: ContactUsComponent}, 
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
