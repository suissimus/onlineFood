import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersRecepiesComponent } from './orders-recepies.component';

describe('OrdersRecepiesComponent', () => {
  let component: OrdersRecepiesComponent;
  let fixture: ComponentFixture<OrdersRecepiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersRecepiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersRecepiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
