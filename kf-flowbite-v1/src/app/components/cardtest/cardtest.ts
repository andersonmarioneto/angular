import { Component } from '@angular/core';

@Component({
  selector: 'app-cardtest',
  templateUrl: './cardtest.html',
  styleUrls: ['./cardtest.css'],
})
export class Cardtest {
  // caminho servido a partir da pasta `assets/` (configurada por padrão no Angular)
  // use no template: <img [src]="myphoto" alt="Profile" />
  myphoto: string = 'assets/images/profile.png';

  constructor() {}
}
