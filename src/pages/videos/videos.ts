import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Videos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html'
})
export class VideosPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello VideosPage Page');
  }

}
