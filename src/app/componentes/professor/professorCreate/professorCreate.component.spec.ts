import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorCreateComponent } from './professorCreate.component';

describe('ProfessorCreateComponent', () => {
  let component: ProfessorCreateComponent;
  let fixture: ComponentFixture<ProfessorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
