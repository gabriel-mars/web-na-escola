import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorReadComponent } from './professorRead.component';

describe('ProfessorRead', () => {
  let component: ProfessorReadComponent;
  let fixture: ComponentFixture<ProfessorReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
