import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomadetailComponent } from './domadetail.component';

describe('DomadetailComponent', () => {
  let component: DomadetailComponent;
  let fixture: ComponentFixture<DomadetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomadetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
