import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RecadosDoCasal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-recados-do-casal',
  templateUrl: 'recados-do-casal.html'
})
export class RecadosDoCasalPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RecadosDoCasalPage Page');
  }

}
