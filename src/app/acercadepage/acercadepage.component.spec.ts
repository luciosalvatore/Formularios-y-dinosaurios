import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercadepageComponent } from './acercadepage.component';

describe('AcercadepageComponent', () => {
  let component: AcercadepageComponent;
  let fixture: ComponentFixture<AcercadepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercadepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercadepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
