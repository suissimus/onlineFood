import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCompaniesComponent } from './orders-companies.component';

describe('OrdersCompaniesComponent', () => {
  let component: OrdersCompaniesComponent;
  let fixture: ComponentFixture<OrdersCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersCompaniesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
