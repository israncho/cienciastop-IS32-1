import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from './perfil';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class PerfilService {
  private urlEndPoint: string = 'http://localhost:8080/api/perfiles';
  
  constructor(private http: HttpClient) { }
  
  public getPerfil(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this.urlEndPoint);
  }
}
