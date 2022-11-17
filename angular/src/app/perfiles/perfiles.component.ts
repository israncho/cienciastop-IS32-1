import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuarios';
import { PerfilService } from './perfil.service';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {
  perfil: Usuario[];
  
  constructor(private perfilService: PerfilService) {
     this.perfil = []
  }

  ngOnInit(): void {
     this.perfilService.getUsuario().subscribe(
        perfiles => this.perfil = perfiles
     );
  }

}
