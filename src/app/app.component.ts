import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ejemplo-angular-crud';

  constructor(private router:Router) {}

  Listar() {
    this.router.navigate(["listar"]);
  }

  Nuevo() {
    this.router.navigate(["add"]);
  }
}
