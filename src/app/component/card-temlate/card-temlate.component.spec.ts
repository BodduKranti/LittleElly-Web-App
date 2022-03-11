import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTemlateComponent } from './card-temlate.component';

describe('CardTemlateComponent', () => {
  let component: CardTemlateComponent;
  let fixture: ComponentFixture<CardTemlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTemlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTemlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
