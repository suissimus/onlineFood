import { Component, OnDestroy, OnInit } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SearchRecipesAutocompleteComponent } from "../ui/search-recipes-autocomplete/search-recipes-autocomplete.component";
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from "../../../infrastructure/ui/button/button.component";
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";
import { DialogConfig, DialogSize } from 'infrastructure/ui/dialog/dialog-config';
import { DialogService } from 'infrastructure/ui/dialog/dialog.service';
import { OrderOnlineDialogComponent } from '../dialogs/order-online-dialog/order-online-dialog.component';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {CardModule} from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';
import { OrdersCompaniesComponent } from "./orders-companies/orders-companies.component";
import { OrdersRecepiesComponent } from "./orders-recepies/orders-recepies.component";


@Component({
    standalone: true,
    templateUrl: './orders.component.html',
    styleUrl: './orders.component.scss',
    imports: [IconFieldModule, 
      InputIconModule, 
      SearchRecipesAutocompleteComponent, 
      ButtonModule, 
      ButtonComponent, 
      ShoppingCartComponent, 
      CardModule, 
      ListboxModule, 
      OrdersCompaniesComponent, 
      OrdersRecepiesComponent]
})
export class OrdersComponent implements OnInit, OnDestroy{
  /** Subs */
  private _subs : Subscription = new Subscription();

  /** Config */
  dialogConfig: DialogConfig = new DialogConfig(DialogSize.SMALL_MEDIUM);

  constructor(
    private _dialogService: DialogService,
    private _router : Router
    ) {
    
  }
  
  ngOnInit(): void {
    
  }
  
  private _openDialog(dialogConfig : DialogConfig){
    const ref = this._dialogService.open(OrderOnlineDialogComponent, dialogConfig);
    
    ref.onClose.subscribe((res)=>{
      
    })
  }
  
  openShoppingCart(){
    this._router.navigate(['/shopping-cart']);
  }
  
  openOrderOnlineDialog(){
    this.dialogConfig.header = 'Order online';
    this.dialogConfig.data = {};
    this.dialogConfig.closable = true;
    this.dialogConfig.hideFooter=true;
    this._openDialog(this.dialogConfig);
  }
  
  search(){
    
  }
  
  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
}