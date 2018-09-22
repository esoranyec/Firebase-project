import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { Authentication } from '../../Services/authentication';

/**
 * Generated class for the SingUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sing-up',
  templateUrl: 'sing-up.html',
})
export class SingUpPage {
  email :string;
  password :string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, private auth: Authentication){

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingUpPage');
  }

  crearAccount(){
    this.auth.createUserWithEmailAndPassword(this.email, this.password);
  }

  crearAccountWithGoogle(){
    this.auth.createUserWithGoogle();
  }

  crearAccountWithFacebook(){
    this.auth.createUserWithFacebook();
  }
}
