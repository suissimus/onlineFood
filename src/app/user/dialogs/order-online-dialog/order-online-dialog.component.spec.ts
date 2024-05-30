import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOnlineDialogComponent } from './order-online-dialog.component';

describe('OrderOnlineDialogComponent', () => {
  let component: OrderOnlineDialogComponent;
  let fixture: ComponentFixture<OrderOnlineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderOnlineDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderOnlineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
