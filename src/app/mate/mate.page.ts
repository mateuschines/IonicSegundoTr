import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mate',
  templateUrl: './mate.page.html',
  styleUrls: ['./mate.page.scss'],
})
export class MatePage implements OnInit {

  private n=7;
  private xs=[1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit() {
  }

  cal(valor){
    this.n=valor;
  }

}
