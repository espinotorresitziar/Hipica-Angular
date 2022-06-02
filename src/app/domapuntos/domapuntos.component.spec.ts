import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomapuntosComponent } from './domapuntos.component';

describe('DomapuntosComponent', () => {
  let component: DomapuntosComponent;
  let fixture: ComponentFixture<DomapuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomapuntosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomapuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
