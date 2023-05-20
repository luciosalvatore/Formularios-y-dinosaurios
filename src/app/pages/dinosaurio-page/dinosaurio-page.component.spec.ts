import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaurioPageComponent } from './dinosaurio-page.component';

describe('DinosaurioPageComponent', () => {
  let component: DinosaurioPageComponent;
  let fixture: ComponentFixture<DinosaurioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinosaurioPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinosaurioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
