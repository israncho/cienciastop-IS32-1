import { Component, OnInit } from '@angular/core';
import { Perfil } from './perfil';
import { PerfilService } from './perfil.service';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {
  perfil: Perfil[];
  
  constructor(private perfilService: PerfilService) {
     this.perfil = []
  }

  ngOnInit(): void {
     this.perfilService.getPerfil().subscribe(
        perfil => this.perfil = perfil
     );
  }

}
