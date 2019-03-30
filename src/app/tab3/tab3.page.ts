import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private opcao=["Carne Frango","Carne Boi","Peixe","Queijo","Calabresa","Peito de Peru"];
  private mostrar;

  opc(te){
    this.mostrar=te;
  }
}
