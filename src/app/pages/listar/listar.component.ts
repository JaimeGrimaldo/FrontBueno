import { Component, OnInit } from '@angular/core';
import {ServiceAlumnoService} from "../../servicios/service-alumno.service";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private servicioAlumno: ServiceAlumnoService) { }

  alumnos: any = []
  ngOnInit(): void {
    this.servicioAlumno.consultarAlumnos().subscribe(datos=>{
      console.log(datos)
      this.alumnos = datos;
    })
  }

}
