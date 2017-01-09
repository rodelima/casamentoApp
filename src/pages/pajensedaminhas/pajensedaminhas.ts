import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Data } from '../../providers/data';

@Component({
  selector: 'page-pajensedaminhas',
  templateUrl: 'pajensedaminhas.html'
})
export class PajensedaminhasPage {
  content: any;
  constructor(public navCtrl: NavController,
  private data: Data) {
    this.content = data.getData('data').pajensedaminhas;
  }

  ionViewDidLoad() {

  }

  getUrlImage(url){
    return this.data.getCordovaDirectory(url)
  }

}
