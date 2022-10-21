import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Book } from 'src/app/modals/book';
import { BookService } from 'src/app/service/book.service';
import { category } from 'src/app/utility/utils';

@Component({
  selector: 'app-book-by-category',
  templateUrl: './book-by-category.component.html',
  styleUrls: ['./book-by-category.component.scss']
})
export class BookByCategoryComponent implements OnInit {
  bookList: Book[] = [];
  category: number = 1;
  allBook: Book[] = [];
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
        console.log('$$$$$$', this.bookList);
        setTimeout(() => {
          this.onChangeCategory();
        }, 100);
     
      }
    }, (error: any) => {
      console.log('Error: ', error);
    });
  }

  onChangeCategory = (): void => {
    const cat = category[this.category];
    this.bookList = this.allBook.filter((item: Book) => item?.category !== null && item?.category.toString() === cat.toString());
  }

  onRowClick(bookItem: Book): void {
    this.router.navigate([`/sale/${bookItem?.id}`]);
  }

}
