import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  nombre = 'Luis Eduardo Hernandez Granillo';
  correo = 'luis.hdz9720@gmail.com'

  producto: ProductoDescripcion;
  id_productos: string;

  constructor(private route: ActivatedRoute, public productosService: ProductosService) { }

  ngOnInit() {

    this.route.params
    .subscribe( parametros => {
      // console.log(parametros['id']);
      this.productosService.getProducto(parametros['id'])
            .subscribe( (producto: ProductoDescripcion) => {
              this.id_productos = parametros['id'];
              this.producto = producto;


            });
    });


  }

}
