import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from './coffee-list/Coffee';

const URL = 'https://638a711ac5356b25a21b42df.mockapi.io/Menu';

@Injectable({
  providedIn: 'root'
})
export class CoffeeDataService {


  constructor(private http: HttpClient) { }

    public getCoffees(): Observable<Coffee[]> {
      return this.http.get<Coffee[]>(URL);
    }
}
