import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceAlumnoService {
  servidor = 'http://localhost:3000';

  constructor(private servicio: HttpClient) { }
  
  consultarAlumnos():Observable<any> {
    return this.servicio.get('ec2-54-235-232-216.compute-1.amazonaws.com/usuarios');
  }
}
