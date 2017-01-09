import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Dicas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dicas',
  templateUrl: 'dicas.html'
})
export class DicasPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello DicasPage Page');
  }

}
