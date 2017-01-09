import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, ModalController, Platform } from 'ionic-angular';

import { NovoRecadoPage } from '../novo-recado/novo-recado';

import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;

  //VARIAVEIS
  mySlideOptions = {
    initialSlide: 0,
    loop: true,
    autoplay: 3000,
    speed: 4000,
    effect: "fade",
    pager: true
  };
  imagensHome: any;
  recados: Array<[{nome: string, recado: any, timestamp: any}]>;

  //DECLARACAO CONSTRUTOR
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private data: Data,
    public platform: Platform
  ) {
    if(data.getData('data')) this.imagensHome = data.getData('data').home.imagens;
      this.recados = this.data.getData('recados');
  }
  //METODOS
  novoRecado(){
    let novoRecado = this.modalCtrl.create(NovoRecadoPage);
    novoRecado.onDidDismiss(()=>{
      this.recados = this.data.getData('recados');
    })
    novoRecado.present();
  }

  getUrlImage(url){
    return this.data.getCordovaDirectory(url);
  }
}
