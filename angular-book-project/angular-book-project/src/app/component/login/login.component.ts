import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginEmail, loginPassword } from 'src/app/constant';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password: string = "";
  email: string = "";
  constructor(
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
  }
  signIn(): void {
    
    if (this.email === loginEmail && this.password === loginPassword) {
      this.bookService.storeAuthorization('success');
      this.router.navigate(['/book-list']);
    } else {
      alert('UserEmail or Password has been incorrect');
    }
  }
}
