import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossgraficaComponent } from './crossgrafica.component';

describe('CrossgraficaComponent', () => {
  let component: CrossgraficaComponent;
  let fixture: ComponentFixture<CrossgraficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossgraficaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossgraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
