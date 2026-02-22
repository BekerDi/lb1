import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecPageComponent } from './spec-page';

describe('SpecPage', () => {
  let component: SpecPageComponent;
  let fixture: ComponentFixture<SpecPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
