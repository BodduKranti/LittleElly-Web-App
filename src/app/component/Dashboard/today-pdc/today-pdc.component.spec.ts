import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayPDCComponent } from './today-pdc.component';

describe('TodayPDCComponent', () => {
  let component: TodayPDCComponent;
  let fixture: ComponentFixture<TodayPDCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayPDCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayPDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
