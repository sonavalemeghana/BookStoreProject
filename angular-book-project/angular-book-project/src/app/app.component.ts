import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { BookService } from './service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book system';
  isLoggedIn: boolean = false;
  constructor(
    private router: Router,
    private bookService: BookService
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      if (this.bookService.getAuthorization() !== null) {
        setTimeout(() => {
          this.isLoggedIn = true;
        }, 10);
      } else {
          setTimeout(() => {
            this.isLoggedIn = false;
          }, 10);
      }
    });
  }
}
