import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersRecepiesCardComponent } from './orders-recepies-card.component';

describe('OrdersRecepiesCardComponent', () => {
  let component: OrdersRecepiesCardComponent;
  let fixture: ComponentFixture<OrdersRecepiesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersRecepiesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersRecepiesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
