import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-load',
  templateUrl: 'load.html'
})
export class LoadPage {

  constructor(
    private platform: Platform,
    public menuCtrl: MenuController
  ) {
    this.platform.registerBackButtonAction(()=>{
        menuCtrl.toggle();
    })
  }

}
