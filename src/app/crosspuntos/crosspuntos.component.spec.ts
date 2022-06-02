import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosspuntosComponent } from './crosspuntos.component';

describe('CrosspuntosComponent', () => {
  let component: CrosspuntosComponent;
  let fixture: ComponentFixture<CrosspuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrosspuntosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosspuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
