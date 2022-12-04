import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coffee } from '../coffee-list/Coffee';

@Component({
  selector: 'app-input-cantidad',
  templateUrl: './input-cantidad.component.html',
  styleUrls: ['./input-cantidad.component.css']
})
export class InputCantidadComponent implements OnInit {

  constructor() {  }

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }


  upQuantity(): void {
    if(this.max > this.quantity){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity(): void{
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);

    }
  }

  changeQuantity(event: any): void{
    if(event.target.value > this.max){
      this.quantity = this.max;
      this.quantityChange.emit(this.quantity);
    }else if(event.target.value < 0){
      this.quantity = 0;
      this.quantityChange.emit(this.quantity);
    }else{
      this.quantity = event.target.value;
      this.quantityChange.emit(this.quantity);
    }
  }

}
