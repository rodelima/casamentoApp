import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Hospedagem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hospedagem',
  templateUrl: 'hospedagem.html'
})
export class HospedagemPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HospedagemPage Page');
  }

}
