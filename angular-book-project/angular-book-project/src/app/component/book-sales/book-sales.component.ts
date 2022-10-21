import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Book } from 'src/app/modals/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-sales',
  templateUrl: './book-sales.component.html',
  styleUrls: ['./book-sales.component.scss']
})
export class BookSalesComponent implements OnInit {
  bookId: number = 0;
  bookItem: Book | undefined;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {
    activatedRoute.params.subscribe(res => {
      console.log('#####', res);
      this.bookId = res['id'];
      this.getBookById(this.bookId);
    });
  }

  getBookById(id: number): void {
    this.bookService.getBookById(id).pipe(take(1)).subscribe((res: any) => {
      console.log('$$$$', res);
      this.bookItem = res;
    });
  }

  ngOnInit(): void {
  }

  onSale(): void {
   this.bookService.saleBook(this.bookItem?.id).pipe(take(1)).subscribe(res => {
    alert("books sales successfully");
    this.getBookById(this.bookId);
   });
  }

}
