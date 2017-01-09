import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Calendar } from 'ionic-native';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-cerimonia',
  templateUrl: 'cerimonia.html'
})
export class CerimoniaPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('Hello CerimoniaPage Page');
  }

  addCalendar (){
    let confirm = this.alertCtrl.create({
      title: 'Adicionar evento no calendário',
      message: 'Salvar data do casamento no calendário do seu celular?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Adicionar',
          handler: () => {
            if (!Calendar.hasReadWritePermission()){
              Calendar.requestReadWritePermission();
            }
            let start = new Date(2016, 7, 20, 19,30,0,0);
            let end = new Date(2016, 7, 20, 22,0,0,0);
            var options = Calendar.getCalendarOptions();
            options.firstReminderMinutes = 1440;
            Calendar.createEventWithOptions('Casamento Marina e Rodrigo', 'Rua da Bahia, 2066 Lourdes, Belo Horizonte, Minas Gerais', 'Aguardamos a sua presença',start, end, options).then(data =>{
              Calendar.openCalendar(start);
              let alert = this.alertCtrl.create({
                title: 'Data Salva',
                buttons: ['OK']
                });
              alert.present();
            }, erro=>{
              let alert = this.alertCtrl.create({
              title: 'Erro ao salvar :(',
              buttons: ['OK']
              });
            alert.present();
            });
          }
        }
      ]
    });
    confirm.present();
  }

}
