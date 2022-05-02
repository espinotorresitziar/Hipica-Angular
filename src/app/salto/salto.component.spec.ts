import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltoComponent } from './salto.component';

describe('SaltoComponent', () => {
  let component: SaltoComponent;
  let fixture: ComponentFixture<SaltoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaltoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaltoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
