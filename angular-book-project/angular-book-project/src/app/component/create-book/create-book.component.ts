import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { BookService } from 'src/app/service/book.service';
import { category } from 'src/app/utility/utils';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  title: string = "";
  author: string = "";
  id: string = "";
  isEdit: boolean  = false;
  category: number = 1;
  price: number = 0;
  totalCount: number = 0;
  imageURL: string = "";
  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((res: any) => {
      console.log('$$$$$', res);
      if (res?.title && res?.author && res?.id) {
        this.isEdit = true;
        this.title = res?.title;
        this.author = res?.author;
        this.id = res?.id;
        this.category = <any>category[res?.category];
        this.price = res?.price;
        this.totalCount = res?.totalCount;
        this.imageURL = res?.imageURL;
      }
    });
  }

  ngOnInit(): void {
  }

  createBook(): void {

    const body: any = {
      title: this.title,
      author: this.author,
      categoryItem: this.category,
      price: this.price,
      totalCount: this.totalCount,
      id: 33*2,
      imageURL: this.imageURL
    };
   
   
    if (!this.isEdit) {
      this.bookService.createBook(body).pipe(take(1)).subscribe(res => {
        alert("Book added successfully");
        this.router.navigate(['/book-list']);
      }, error => {
        alert("something went wrong while create book");
      });
    } else {
      this.bookService.updateBook(body, this.id).pipe(take(1)).subscribe(res => {
        alert("Book Updated successfully");
        this.router.navigate(['/book-list']);
      }, error => {
        alert("something went wrong while create book");
      })
    }
   
  }
}
