import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Data } from '../../providers/data';


@Component({
  selector: 'page-presentes',
  templateUrl: 'presentes.html'
})
export class PresentesPage {
  listas: any;
  constructor(
    public navCtrl: NavController,
    private data: Data
  ) {
    this.listas = data.getData('data').presentes;
  }

  ionViewDidLoad() {

  }

  getUrlImage(url){
    return this.data.getCordovaDirectory(url)
  }

}
