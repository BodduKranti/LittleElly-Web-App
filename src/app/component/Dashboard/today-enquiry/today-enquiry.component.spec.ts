import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayEnquiryComponent } from './today-enquiry.component';

describe('TodayEnquiryComponent', () => {
  let component: TodayEnquiryComponent;
  let fixture: ComponentFixture<TodayEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayEnquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
