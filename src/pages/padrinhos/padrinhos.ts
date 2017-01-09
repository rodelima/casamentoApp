import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Data } from '../../providers/data';

@Component({
  selector: 'page-padrinhos',
  templateUrl: 'padrinhos.html'
})
export class PadrinhosPage {
  content: any;
  constructor(public navCtrl: NavController,
  private data: Data) {
    this.content = data.getData('data').padrinhos;
  }

  ionViewDidLoad() {

  }

  getUrlImage(url){
    return this.data.getCordovaDirectory(url)
  }

}
