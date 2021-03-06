import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  persona:Persona=new Persona();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar() {
    let id=localStorage.getItem("id");
    this.service.getPersonaId(+id)
      .subscribe(data => {
        this.persona=data;
      })
  }
}
