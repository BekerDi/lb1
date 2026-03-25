import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentShell } from './comment-shell';

describe('CommentShell', () => {
  let component: CommentShell;
  let fixture: ComponentFixture<CommentShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentShell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
