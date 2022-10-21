import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../modals/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  storeAuthorization(token: string): void {
    localStorage.setItem("login", token);
  }

  getAuthorization(): any {
    const token = localStorage.getItem("login");
    return token; 
  }

  getBookList(): Observable<any> {
    return this.http.get("/apiservice/api/book-list");
  }

  deleteBook(id: string): Observable<any> {
    return this.http.delete(`/apiservice/api/book/${id}`);
  }

  createBook(body: any): Observable<any> {
    return this.http.post("/apiservice/api/add-new-book", body);
  }

  updateBook(body: any, id: string): Observable<any> {
    return this.http.put(`/apiservice/api/books/${id}`, body);
  }

  getBookById(id: number): Observable<any> {
    return this.http.get("/apiservice/api/book/" + id);
  }

  saleBook(bookId: any): Observable<any> {
    return this.http.put(`/apiservice/api/sell-book/${bookId}`, {});
  }

}
