import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EshopRegistrationComponent } from './eshop-registration.component';

describe('EshopRegistrationComponent', () => {
  let component: EshopRegistrationComponent;
  let fixture: ComponentFixture<EshopRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EshopRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EshopRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
