import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecPage } from './spec-page';

describe('SpecPage', () => {
  let component: SpecPage;
  let fixture: ComponentFixture<SpecPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
