import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltodetailComponent } from './saltodetail.component';

describe('SaltodetailComponent', () => {
  let component: SaltodetailComponent;
  let fixture: ComponentFixture<SaltodetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaltodetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaltodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
