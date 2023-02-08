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

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(){
    this.http.get<IEventos[]>(`${environment.apiUrl}eventos`)
      .subscribe({
        next: (response) => {
          this.eventos = response
        },
        error: ( (err) => {
          console.log(err)
          }
        )
      })
  }

}
