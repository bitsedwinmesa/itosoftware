import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';
import { GLOBAL } from '../services/global';

@Component({
	selector: 'usuario-add',
	templateUrl: '../views/rol-add.html',
	providers: [UsuarioService]
})
export class RolAddComponent{
	public titulo: string;
	public rol: Usuario;
	public nombre: string;
	public descripcion: string;


	constructor(
		private _UsuarioService: UsuarioService,
	){
		this.titulo = 'Crear un nuevo rol';
	}

	ngOnInit(){
		console.log('rol-add.component.ts cargado...');
	}
	getAddRol(){
		console.log('tests');

		this._UsuarioService.getAddRol(this.nombre, this.descripcion).subscribe(
			(result: Array<any>) => {
				console.log(result);
			},
			error => {
				console.log(<any>error);
			}
		);
	}

}