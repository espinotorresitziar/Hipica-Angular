import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipanteDetailComponent } from './participante-detail.component';

describe('ParticipanteDetailComponent', () => {
  let component: ParticipanteDetailComponent;
  let fixture: ComponentFixture<ParticipanteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipanteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipanteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
