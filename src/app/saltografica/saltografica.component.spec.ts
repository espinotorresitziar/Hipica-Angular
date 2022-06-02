import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltograficaComponent } from './saltografica.component';

describe('SaltograficaComponent', () => {
  let component: SaltograficaComponent;
  let fixture: ComponentFixture<SaltograficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaltograficaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaltograficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
