import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.sass']
})
export class ListarComponent implements OnInit {

  personas:Persona[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getPersonas()
      .subscribe(data => {
        this.personas = data;
      })
  }

  Editar(persona:Persona):void {
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["edit"]);
  }

}
