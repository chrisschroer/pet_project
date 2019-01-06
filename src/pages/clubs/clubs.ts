import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Club } from '../../shared/club';
import { ClubProvider } from '../../providers/club/club';
import { ClubdetailPage } from '../clubdetail/clubdetail';
import { FavoriteProvider } from '../../providers/favorite/favorite';
/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-clubs',
  templateUrl: 'clubs.html',
})
export class ClubsPage implements OnInit {
  clubs: Club[];
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private clubservice: ClubProvider,
    private favoriteservice: FavoriteProvider,
    private toastCtrl: ToastController,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.clubservice.getClubs()
      .subscribe(clubs => this.clubs = clubs,
        errmess => this.errMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClubsPage');
  }

  addToFavorites(club: Club) {
    console.log('Adding to Favorites', club.id);
    this.favoriteservice.addFavorite(club.id);
    this.toastCtrl.create({
      message: 'Club ' + club.id + ' added as a favorite successfully',
      duration: 3000
    }).present();
  }

  clubSelected(event, club) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ClubdetailPage, {
      club: club
    });
  }
}
