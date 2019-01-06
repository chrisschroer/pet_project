import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the MeasurealcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-measurealc',
  templateUrl: 'measurealc.html',
})
export class MeasurealcPage {

  todo = {
    no_beer: 0,
    no_wine: 0,
    no_cocktails: 0,
    alc_level: 0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewCtrl: ViewController,
  private formBuilder: FormBuilder,
  private alertCtrl: AlertController) {
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeasurealcPage');
  }
  onCalc() {
    console.log(this.todo.no_beer)
    if (this.todo.no_beer == 0 && this.todo.no_wine == 0 && this.todo.no_cocktails == 0) {
      console.log('No Drinks')
      let alert = this.alertCtrl.create({
        title: 'Error - No drinks already',
        message: 'Please choose any numbers',
        buttons: [
          {
            text: 'Ok',
            role: 'cancel',
            handler: () => {
              console.log('Confirmed');
            }
          },
        ]
      });
      alert.present();

    } else {
        console.log('Calculate blood alcohol')
        this.todo.alc_level = (this.todo.no_beer * 0.3 + this.todo.no_wine*0.3 + this.todo.no_cocktails * 0.5);
        console.log(this.todo.alc_level)
    }
  }
}
