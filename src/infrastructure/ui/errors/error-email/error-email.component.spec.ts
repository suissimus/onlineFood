import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorEmailComponent } from './error-email.component';

describe('ErrorEmailComponent', () => {
  let component: ErrorEmailComponent;
  let fixture: ComponentFixture<ErrorEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
