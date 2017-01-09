import { Component } from '@angular/core';
import { NavController, ViewController, Platform} from 'ionic-angular';
import { Keyboard } from 'ionic-native';

import { Data } from '../../providers/data';


declare namespace firebase.database.ServerValue {
var TIMESTAMP: any
}

@Component({
  selector: 'page-novo-recado',
  templateUrl: 'novo-recado.html'
})
export class NovoRecadoPage {

  todo = {"nome":"", "recado":""}

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public platform: Platform,
    private data: Data) {
    }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      Keyboard.disableScroll(true);
    });
}

ionViewWillLeave() {
    this.platform.ready().then(() => {
      Keyboard.disableScroll(false);
    });
}

  dismiss() {
    this.viewCtrl.dismiss();
  }

  enviarRecado(){
    if (this.todo.nome != "" && this.todo.recado != ""){
      this.data.enviarRecado(this.todo.nome, this.todo.recado, firebase.database.ServerValue.TIMESTAMP).then(()=>{
        this.viewCtrl.dismiss();
        this.todo = {"nome":"", "recado":""}
      })
    }
  }

}
