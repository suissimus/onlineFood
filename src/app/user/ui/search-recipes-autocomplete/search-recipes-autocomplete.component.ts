import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoComplete, AutoCompleteModule } from 'primeng/autocomplete';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import {default as dishes} from "@dishes/dish.json";
import { ShoppingCartService } from 'app/user/shopping-cart/shopping-cart.service';
import { Dish } from 'app/user/orders/orders-recepies/orders-recepies.component';
import { AlertService } from 'infrastructure/shared/services/alert.service';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'sf-search-recipes-autocomplete',
  standalone: true,
  imports: [AutoCompleteModule, FormsModule,IconFieldModule,InputIconModule],
  templateUrl: './search-recipes-autocomplete.component.html',
  styleUrl: './search-recipes-autocomplete.component.scss'
})
export class SearchRecipesAutocompleteComponent implements OnInit{
  /** I/O */
  @ViewChild('ac') autoComplete: AutoComplete | undefined;
  @Input() placeholder : string ='';
  
  /** Props */
  items: any[] | undefined;
  selectedItem: any;
  suggestions: any[] | undefined;
  location: any;
  

  constructor(private _shoppingCartService: ShoppingCartService,
    private _alertService: AlertService
    ){}

  ngOnInit(): void {
    
  }

  search(event: AutoCompleteCompleteEvent) {
    this.suggestions = dishes.filter(dish => dish.Name.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
  }

  onSelect(item: any){
    this._shoppingCartService.addToCart({
      id : item.value.Id,
      name : item.value.Name,
      price : item.value.Price,
      photo : item.value.photo,
    } as Dish);
    this.autoComplete?.clear();
    this._alertService.addSuccessMsg("Added to shopping cart!")
  }
}