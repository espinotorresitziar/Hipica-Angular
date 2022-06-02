import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossdetailComponent } from './crossdetail.component';

describe('CrossdetailComponent', () => {
  let component: CrossdetailComponent;
  let fixture: ComponentFixture<CrossdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
