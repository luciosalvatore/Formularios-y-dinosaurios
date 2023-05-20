import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFormPageComponent } from './get-form-page.component';

describe('GetFormPageComponent', () => {
  let component: GetFormPageComponent;
  let fixture: ComponentFixture<GetFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFormPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
