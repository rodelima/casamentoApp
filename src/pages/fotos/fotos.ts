import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Fotos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fotos',
  templateUrl: 'fotos.html'
})
export class FotosPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FotosPage Page');
  }

}
