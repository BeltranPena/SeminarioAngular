import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChanguitoServiceService } from '../changuito-service.service';
import { Coffee } from '../coffee-list/Coffee';

@Component({
  selector: 'app-listado-compra',
  templateUrl: './listado-compra.component.html',
  styleUrls: ['./listado-compra.component.css']
})
export class ListadoCompraComponent implements OnInit {

  public changuito$!: Observable<Coffee[]>;
  constructor(private changuitoService: ChanguitoServiceService) {
    this.changuito$ = changuitoService.changuito.asObservable();
   }

  ngOnInit(): void {
  }

}
