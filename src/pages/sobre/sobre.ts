import { Component } from '@angular/core';

import { Data } from '../../providers/data';

@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html'
})
export class SobrePage {

  content:any;

  constructor(private data: Data) {
    this.content = data.getData('data').sobre;
  }

  ionViewDidLoad() {

  }

  getUrlImage(){
    return this.data.getCordovaDirectory(this.content.imagem)
  }

}
