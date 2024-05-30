import { Component, OnInit } from '@angular/core';
import { OrdersRecepiesCardComponent } from "./orders-recepies-card/orders-recepies-card.component";
import { ImageModule } from 'primeng/image';
import { ButtonComponent } from "../../../../infrastructure/ui/button/button.component";
import {default as dishes} from "@dishes/dish.json";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'sf-orders-recepies',
    standalone: true,
    templateUrl: './orders-recepies.component.html',
    styleUrl: './orders-recepies.component.scss',
    imports: [OrdersRecepiesCardComponent, 
   ImageModule, CommonModule,ButtonComponent]
})
export class OrdersRecepiesComponent implements OnInit{
  dishList: Dish[] = [];
  
  
  ngOnInit(): void {

    console.log(dishes);
    let dish: Dish;
    dishes.forEach(item => {
      dish ={
        id : item.Id,
        name :item.Name,
        description : item.Description,
        price : item.Price,
        categoryId : item.categoryId,
        photo: item.photo

      }
      this.dishList.push (dish);
    })
    console.log(this.dishList);
  }
}

export interface Dish {
 id : number;
 name : string;
 description : string;
 price: number;
 categoryId: number;
 photo: string;
}
