import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { LoadPage } from '../pages/load/load';
import { MyApp } from './app.component';
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
import { NovoRecadoPage } from '../pages/novo-recado/novo-recado';
import { Data } from '../providers/data';

export const firebaseConfig = {
  apiKey: "AIzaSyBxPTv99K7pbJlz-H3Wk9E7SjoYCougLRA",
  authDomain: "casamento-1d200.firebaseapp.com",
  databaseURL: "https://casamento-1d200.firebaseio.com",
  storageBucket: "casamento-1d200.appspot.com",
  messagingSenderId: "87794043736"
};

@NgModule({
  declarations: [
    MyApp,
    LoadPage,
    HomePage,
    RecadosDoCasalPage,
    PresentesPage,
    CerimoniaPage,
    FestaPage,
    PadrinhosPage,
    PajensedaminhasPage,
    SobrePage,
    NovoRecadoPage,
    FotosPage,
    VideosPage,
    HospedagemPage,
    DicasPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false } ),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoadPage,
    HomePage,
    RecadosDoCasalPage,
    PresentesPage,
    CerimoniaPage,
    FestaPage,
    PadrinhosPage,
    PajensedaminhasPage,
    SobrePage,
    NovoRecadoPage,
    FotosPage,
    VideosPage,
    HospedagemPage,
    DicasPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Data]
})
export class AppModule {}
