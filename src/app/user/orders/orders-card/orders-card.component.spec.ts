import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCardComponent } from './orders-card.component';

describe('OrdersCardComponent', () => {
  let component: OrdersCardComponent;
  let fixture: ComponentFixture<OrdersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
