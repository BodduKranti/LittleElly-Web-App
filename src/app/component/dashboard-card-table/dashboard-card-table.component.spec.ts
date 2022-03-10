import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardTableComponent } from './dashboard-card-table.component';

describe('DashboardCardTableComponent', () => {
  let component: DashboardCardTableComponent;
  let fixture: ComponentFixture<DashboardCardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCardTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
