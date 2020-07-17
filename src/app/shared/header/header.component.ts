import { Component, OnInit } from '@angular/core';
import { InfoPagina } from '../../interfaces/info-pagina.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public servicio: InfoPaginaService, private router: Router) { }

  ngOnInit(): void {
  }
   buscarProducto( palabra: string){
     if(palabra.length < 1){
       return;
     }
     this.router.navigate(['/search', palabra]);
     console.log(palabra);
   }

}
