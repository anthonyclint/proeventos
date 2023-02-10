import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { environment } from './../../../environments/environment';
import { IEventos } from './../../shared/models/IEventos';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos!: IEventos[];
  public eventosFiltrados!: IEventos[];
  larguraImg = 120;
  margemImg = 2;
  verImg = true;
  private _filtroLista = '';

  public get filtroLista(): string{
    return this._filtroLista;
  }

  public set filtroLista(value: string){
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(){
    this.http.get<IEventos[]>(`${environment.apiUrl}eventos`)
      .subscribe({
        next: (response) => {
          this.eventos = response;
          this.eventosFiltrados = this.eventos
        },
        error: ( (err) => {
          console.log(err)
          }
        )
      })
  }

  filtrarEventos(filtrar: string){
    filtrar = filtrar.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrar) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filtrar) !== -1
    )
  }

  mostrarImagem(): void{
    this.verImg = !this.verImg;
  }

}
