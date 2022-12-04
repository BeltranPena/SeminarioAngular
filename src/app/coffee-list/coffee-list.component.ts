import { Component, OnInit } from '@angular/core';
import { Coffee } from './Coffee';
import { ChanguitoServiceService } from '../changuito-service.service';
import { CoffeeDataService } from '../coffee-data.service';


@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffees: Coffee[] = [];

  constructor(
    private changuitoService: ChanguitoServiceService,
    private cafeService: CoffeeDataService) { }

  ngOnInit(): void {
    this.cafeService.getCoffees().subscribe(
      (coffees) => {
        this.coffees = coffees;
      }
    );
  }

  alChanguito(coffee: Coffee): void{
    if(coffee.quantity > 0){
      this.changuitoService.alChanguito(coffee);
      coffee.stock -= coffee.quantity;
      coffee.quantity = 0;
    }
  }

}
