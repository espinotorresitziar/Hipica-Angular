import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltopuntosComponent } from './saltopuntos.component';

describe('SaltopuntosComponent', () => {
  let component: SaltopuntosComponent;
  let fixture: ComponentFixture<SaltopuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaltopuntosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaltopuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
