import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'user.html'
})
export class UserPage {
  Menu: string = "General";
  constructor(public navCtrl: NavController) {

  }

}
