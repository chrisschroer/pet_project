import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,
  ToastController, ActionSheetController } from 'ionic-angular';
  import { Club } from '../../shared/club';
  import { Comment } from '../../shared/comment';
  import { FavoriteProvider } from '../../providers/favorite/favorite';
  import { BuyticketsPage } from '../../pages/buytickets/buytickets';
  import { CommentPage } from '../../pages/comment/comment';
  import { SocialSharing } from '@ionic-native/social-sharing';
  /**
  * Generated class for the ClubdetailPage page.
  *
  * See http://ionicframework.com/docs/components/#navigation for more info
  * on Ionic pages and navigation.
  */
  @IonicPage()
  @Component({
    selector: 'page-clubdetail',
    templateUrl: 'clubdetail.html',
  })
  export class ClubdetailPage {
    club: Club;
    errMess: string;
    avgstars: string;
    numcomments: number;
    favorite: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams,
      @Inject('BaseURL') private BaseURL,
      private favoriteservice: FavoriteProvider,
      private toastCtrl: ToastController,
      public modalCtrl: ModalController,
      public actionSheetCtrl: ActionSheetController,
      private socialSharing: SocialSharing) {
        this.club = navParams.get('club');
        this.favorite = favoriteservice.isFavorite(this.club.id);
        this.numcomments = this.club.comments.length;
        let total = 0;
        this.club.comments.forEach(comment => total += comment.rating );
        this.avgstars = (total/this.numcomments).toFixed(2);


      }

      addToFavorites() {
        console.log('Adding to Favorites', this.club.id);
        this.favorite = this.favoriteservice.addFavorite(this.club.id);
        this.toastCtrl.create({
          message: 'Club ' + this.club.id + ' added as favorite successfully',
          position: 'middle',
          duration: 3000}).present();
        }

        presentActionSheet() {
          let actionSheet = this.actionSheetCtrl.create({
            title: 'Select Actions',
            buttons: [
              {
                text: 'Add to Favorites',
                handler: () => {
                  this.addToFavorites();
                  console.log('Favorites clicked');
                }
              },
              {
                text: 'Add Comment',
                handler: () => {
                  this.openComment();
                  console.log('Comment clicked');
                }
              },
              {
                text: 'Share via Facebook',
                handler: () => {
                  this.socialSharing.shareViaFacebook(this.club.name + ' -- ' + this.club.description, this.BaseURL + this.club.image, '')
                  .then(() => console.log('Posted successfully to Facebook'))
                  .catch(() => console.log('Failed to post to Facebook'));
                }
              },
              {
                text: 'Share via Twitter',
                handler: () => {
                  this.socialSharing.shareViaTwitter(this.club.name + ' -- ' + this.club.description, this.BaseURL + this.club.image, '')
                  .then(() => console.log('Posted successfully to Twitter'))
                  .catch(() => console.log('Failed to post to Twitter'));
                }
              },
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              }
            ]
          });

          actionSheet.present();
        }

        openComment() {
          let modal = this.modalCtrl.create(CommentPage);
          modal.onDidDismiss(comment => {
            if (comment==null)
            {
              console.log('No comment added');
            }
            else
            {
              this.club.comments.push(comment)
            }
          })
          modal.present();
        }
        openBuytickets() {
          let modal = this.modalCtrl.create(BuyticketsPage);
          modal.present();
        }

        ionViewDidLoad() {
          console.log('ionViewDidLoad ClubdetailPage');
        }

      }
