import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorDeleteComponent } from './professorDelete.component';

describe('ProfessorDeleteComponent', () => {
  let component: ProfessorDeleteComponent;
  let fixture: ComponentFixture<ProfessorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
