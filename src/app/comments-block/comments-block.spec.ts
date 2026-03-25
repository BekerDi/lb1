import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsBlock } from './comments-block';

describe('CommentsBlock', () => {
  let component: CommentsBlock;
  let fixture: ComponentFixture<CommentsBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
