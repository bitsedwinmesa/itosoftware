import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
	selector: 'productos-list',
	templateUrl: '../views/rol-list.html',
	providers: [UsuarioService]
})

export class RolListComponent{
	public titulo: string;
	public Usuario: Usuario[];
	public List: Array<any>;
	public nombre: string;
	public descripcion: string;

e

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _UsuarioService: UsuarioService,
	){
		this.titulo = 'Listado de Usuarios';
	}

	ngOnInit(){
		this.getUsuarios();
	}

	cleanInput() {
		this.nombre = '';
		this.descripcion = '';
	}

	getSearch() {
		this._UsuarioService.getSearch(this.nombre, this.descripcion).subscribe(
			(result: any)=>{
				console.log(result);
				this.List = result.content;
			}
		);

	}

	getUsuarios(){
		this._UsuarioService.getUsuarios().subscribe(
			(result: Array<any>) => {
				console.log(result);
				this.List = result;
			},
			error => {
				console.log(<any>error);
			}
		);
	}
}
