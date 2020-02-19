import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacionLaboralComponent } from './situacion-laboral.component';

describe('SituacionLaboralComponent', () => {
  let component: SituacionLaboralComponent;
  let fixture: ComponentFixture<SituacionLaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituacionLaboralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituacionLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
