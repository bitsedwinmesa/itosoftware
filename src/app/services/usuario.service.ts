import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


import { Observable } from 'rxjs/Observable';
import { Usuario } from '../models/usuario';
import { GLOBAL } from './global';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'



const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
		'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJleHRlcm5vIiwiaWF0IjoxNTY1ODc5MjU5LCJleHAiOjE1NjU5NjU2NTl9.jNpyhFLwnKMCCV0Ttw_LXqUv2qomO0LpYyCCACFyyZDUTftp4PryQ7fIfC7sXtkgz2pYTgyLRV1hl7YHlTrW_g'
	})
};

@Injectable()
export class UsuarioService{
	public url: string;
	private global = GLOBAL;

	constructor(
		private http: HttpClient,
	){

	}

	getUsuarios(){
		return this.http.get(this.global.url, httpOptions);
	}

	getSearch(nombre, descripcion) {
		return this.http.get(this.global.urlsearch + '?nombre=' + nombre + '&' +'descripcion=' + descripcion, httpOptions);
	}

	getAddRol(nombre, descripcion): Observable<any> {

		console.log(nombre, descripcion);
		let body: any = {
			"activo": true,
			"descripcion": descripcion,
			"nombre": nombre,
			"permisos": [
				{
					"activo": true,
					"id": 1,
					"nombre": nombre,
					"registrosDependientes": true
				}
			]
		}
		let json = JSON.stringify(body);

		return this.http.post(this.global.url+'/' + json, httpOptions);
	}
}