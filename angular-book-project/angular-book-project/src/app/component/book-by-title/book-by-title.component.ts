import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Book } from 'src/app/modals/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-by-title',
  templateUrl: './book-by-title.component.html',
  styleUrls: ['./book-by-title.component.scss']
})
export class BookByTitleComponent implements OnInit {

  bookList: Book[] = [];
  allBook: Book[] = [];
  title: string = "";
  constructor(
    private bookservice: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllbook();
  }

  getAllbook = (): void => {
    this.bookservice.getBookList().pipe(take(1)).subscribe((res: any) => {
      if (!!res && Array.isArray(res)) {
        this.allBook = res;
      }
    }, (error: any) => {
      console.log('Error: ', error);
    });
  }

  onRowClick(bookItem: Book): void {
    this.router.navigate([`/sale/${bookItem?.id}`]);
  }

  onKeyDown(): void {
    setTimeout(() => {
      if (this.title.length > 0) {
        this.bookList = this.allBook.filter((item: Book) => item?.title !== null && item?.title.toLowerCase().includes(this.title.toLowerCase()));
      } else {
        this.bookList = [];
      }
    }, 200);
    
  }

}
