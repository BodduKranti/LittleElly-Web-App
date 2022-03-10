import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BounchedChequesComponent } from './bounched-cheques.component';

describe('BounchedChequesComponent', () => {
  let component: BounchedChequesComponent;
  let fixture: ComponentFixture<BounchedChequesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BounchedChequesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BounchedChequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
