import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private service: BookService
  ) { }

  ngOnInit(): void {
  }
  
  routerToLink(link: string): void {
    if (link === '/logout') {
      this.service.logout();
      this.router.navigate(['/']);
      return;
    }
    this.router.navigate([link]);
  }
}
