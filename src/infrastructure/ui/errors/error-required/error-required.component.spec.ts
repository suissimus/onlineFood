import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorRequiredComponent } from './error-required.component';

describe('ErrorRequiredComponent', () => {
  let component: ErrorRequiredComponent;
  let fixture: ComponentFixture<ErrorRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorRequiredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
