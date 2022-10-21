import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookByTitleComponent } from './book-by-title.component';

describe('BookByTitleComponent', () => {
  let component: BookByTitleComponent;
  let fixture: ComponentFixture<BookByTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookByTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookByTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
