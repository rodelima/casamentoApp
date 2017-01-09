import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, NativeAudio } from 'ionic-native';
import { LoadPage } from '../pages/load/load';
import { HomePage } from '../pages/home/home';
import { RecadosDoCasalPage } from '../pages/recados-do-casal/recados-do-casal';
import { PresentesPage } from '../pages/presentes/presentes';
import { CerimoniaPage } from '../pages/cerimonia/cerimonia';
import { FestaPage } from '../pages/festa/festa';
import { PadrinhosPage } from '../pages/padrinhos/padrinhos';
import { PajensedaminhasPage } from '../pages/pajensedaminhas/pajensedaminhas';
import { SobrePage } from '../pages/sobre/sobre';
import { FotosPage } from '../pages/fotos/fotos';
import { VideosPage } from '../pages/videos/videos';
import { HospedagemPage } from '../pages/hospedagem/hospedagem';
import { DicasPage } from '../pages/dicas/dicas';

import { Data } from '../providers/data';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = LoadPage;
  pages: Array<{title: string, component: any, icon: any}>;

  constructor(private platform: Platform, private data: Data) {
    //PAGINAS
    this.pages = [
      { title: 'Inicio', component: HomePage, icon: 'fa fa-home' },
      { title: 'Recados do Casal', component: RecadosDoCasalPage, icon: 'fa fa-pencil-square-o' },
      { title: 'Sobre o Casal', component: SobrePage, icon: 'fa fa-newspaper-o' },
      { title: 'Fotos', component: FotosPage, icon: 'fa fa-camera-retro' },
      { title: 'Videos', component: VideosPage, icon: 'fa fa-video-camera' },
      { title: 'Padrinhos', component: PadrinhosPage, icon: 'fa fa-users' },
      { title: 'Pajens e Daminhas', component: PajensedaminhasPage, icon: 'fa fa-diamond' },
      { title: 'Presentes', component: PresentesPage, icon: 'fa fa-gift' },
      { title: 'Cerimonia', component: CerimoniaPage, icon: 'fa fa-heart' },
      { title: 'Festa', component: FestaPage, icon: 'fa fa-music' },
      { title: 'Hospedagem', component: HospedagemPage, icon: 'fa fa-building' },
      { title: 'Dicas', component: DicasPage, icon: 'fa fa-check' }
    ];
    //CONFIGURACOES
    platform.ready().then(() => {
      NativeAudio.preloadComplex('uniqueId2', 'music.mp3', 1, 1, 0).then(data => {
        NativeAudio.loop('uniqueId2');
      }, erro => {});
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      document.getElementById("splash").style.display = "none";
      if(!data.getData('data')){
        Promise.all([data.getFireBase('aplicativo'), data.downloadImagens()]).then(()=>{
          this.finalizaCarregamentoApp()
        })
      } else this.finalizaCarregamentoApp();
      });
    }

    finalizaCarregamentoApp(){
      StatusBar.styleDefault();
      this.nav.setRoot(HomePage);
    }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  sair(){
    navigator['app'].exitApp();
  }
}
