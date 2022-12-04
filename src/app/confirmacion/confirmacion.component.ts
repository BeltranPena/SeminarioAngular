import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChanguitoServiceService } from '../changuito-service.service';
import { Coffee } from '../coffee-list/Coffee';
import { ListadoCompraComponent } from '../listado-compra/listado-compra.component';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {

  public changuito$!: Observable<Coffee[]>;
  constructor(private changuitoService: ChanguitoServiceService) {
    this.changuito$ = changuitoService.changuito.asObservable();
   }

  ngOnInit(): void {
    console.log(this.changuito$);
  }

  
}
