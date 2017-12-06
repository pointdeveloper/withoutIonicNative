import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var navigator: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  vibrate(){
    navigator.vibrate(50)
  }
}
