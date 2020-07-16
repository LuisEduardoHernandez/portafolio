import { Component, OnInit } from '@angular/core';
import { InfoPagina } from '../../interfaces/info-pagina.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public servicio: InfoPaginaService) { }

  ngOnInit(): void {
  }
   buscarProducto( termino: string){
     console.log(termino);
   }

}
