import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaLandingComponent } from './empresa-landing.component';

describe('EmpresaLandingComponent', () => {
  let component: EmpresaLandingComponent;
  let fixture: ComponentFixture<EmpresaLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpresaLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresaLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
