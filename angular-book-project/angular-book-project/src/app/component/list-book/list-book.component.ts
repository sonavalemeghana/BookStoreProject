import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { BookService } from 'src/app/service/book.service';
import { Book } from 'src/app/modals/book';
import { Router } from '@angular/router';
import { category } from 'src/app/utility/utils';
// import jsPDF from 'jspdf';


@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  
  bookList: Book[] = [];
  constructor(
    private bookservice: BookService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.getAllbook();
  }

 getAllbook = (): void => {
    this.bookservice.getBookList().pipe(take(1)).subscribe((res: any) => {
      if (!!res && Array.isArray(res)) {
        this.bookList = res;
        console.log('$$$$$$', this.bookList);
      }
    }, (error: any) => {
      console.log('Error: ', error);
    });
  }

  onEdit = (item: Book): void => {
    console.log("####", item);
    this.router.navigate(["/create-book"], { queryParams: { title: item?.title, author: item?.author, id: item?.id, category: item?.category, price: item?.price, totalCount: item?.totalCount, imageURL: item?.imageURL } });
  }

  onDelete = (item: Book): void => {
    this.bookservice.deleteBook(item?.id).pipe(take(1)).subscribe((res: any) => {
      console.log('#######', res);
      alert("Delete book successfully");
      this.getAllbook();
    }, (error: any) => {
      alert("Delete book successfully");
      this.getAllbook();
    });
  }

  report = (item: Book): void => {
    console.log('>>>', item);
    const today = new Date();
    // const doc = new jsPDF();
    // const html = `
    // <div style="float: right">
    //   ${today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()}
    // </div>
    //   <div>
    //   <b>title</b> : ${item?.title}
    //   <b>author </b>: ${item?.title}
    //   </div>
    // `
    // doc.html(html);
    // doc.text("title: " + item?.title + "\n" + " author: " + item?.author, 10, 10);
    // doc.save(new Date().getTime() + ".pdf");
  }

  getCategory(item: any): string {
    return category[item];
  }

  onRowClick(bookItem: Book): void {
    this.router.navigate([`/sale/${bookItem?.id}`]);
  }

}
