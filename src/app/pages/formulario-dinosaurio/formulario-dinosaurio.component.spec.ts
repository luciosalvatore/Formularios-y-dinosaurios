import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDinosaurioComponent } from './formulario-dinosaurio.component';

describe('FormularioDinosaurioComponent', () => {
  let component: FormularioDinosaurioComponent;
  let fixture: ComponentFixture<FormularioDinosaurioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDinosaurioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDinosaurioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
