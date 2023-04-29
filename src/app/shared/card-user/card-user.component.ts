import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  public imgUrl = 'https://phantom-marca.unidadeditorial.es/4c7e775d1e2a58f3c271fb52048e4262/resize/1320/f/jpg/assets/multimedia/imagenes/2022/10/10/16654222870042.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
