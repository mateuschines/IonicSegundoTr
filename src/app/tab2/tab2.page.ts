import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private nome2;
  private email = "";
  private email2;
  private msg = "";
  private msg2;

  submit(nome, email, msg){
    this.nome2=nome;
    this.email2=email;
    this.msg2=msg;
  }
  
  setNome(nome){
    this.nome2=nome;
  }
}
