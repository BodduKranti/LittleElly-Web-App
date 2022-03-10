import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayBirthdayComponent } from './today-birthday.component';

describe('TodayBirthdayComponent', () => {
  let component: TodayBirthdayComponent;
  let fixture: ComponentFixture<TodayBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayBirthdayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
