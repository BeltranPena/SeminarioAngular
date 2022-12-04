import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Coffee } from './coffee-list/Coffee';

@Injectable({
  providedIn: 'root'
})
export class ChanguitoServiceService {

  private _changuito: Coffee[] = [];

  changuito: BehaviorSubject<Coffee[]> = new BehaviorSubject(this._changuito);

  constructor() { }

  alChanguito(coffee: Coffee): void{
    let compra = this._changuito.find((v1) => v1.name == coffee.name);
    if(!compra){
      this._changuito.push({...coffee});
    }
    else{
      compra.quantity += coffee.quantity;
    }
    this.changuito.next(this._changuito);
  }
}
