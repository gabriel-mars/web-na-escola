import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCurricularComponent } from './componente-curricular.component';

describe('ComponenteCurricularComponent', () => {
  let component: ComponenteCurricularComponent;
  let fixture: ComponentFixture<ComponenteCurricularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteCurricularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCurricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
