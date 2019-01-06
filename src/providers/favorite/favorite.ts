import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Club } from '../../shared/club';
import { Observable } from 'rxjs/Observable';
import { ClubProvider } from '../club/club';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';
/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {

  favorites: Array<any>;

  constructor(public http: Http, private clubservice: ClubProvider,
    private storage: Storage,
    private localNotifications: LocalNotifications) {

      storage.get('favorites').then(favorites => {
        if (favorites) {
          console.log(favorites);
          this.favorites = favorites;
        }
      else
        console.log('Favorites not defined');
    });

          console.log('Hello FavoriteProvider Provider');
          this.favorites = [];
        }

  addFavorite(id: number): boolean {
    if (!this.isFavorite(id))
      this.favorites.push(id);
      this.storage.set('favorites', this.favorites)

      // Schedule a single notification
    this.localNotifications.schedule({
      id: id,
      text: 'Club ' + id + ' added as a favorite successfully'
    });

    console.log('favorites', this.favorites);
    return true;
  }

  isFavorite(id: number): boolean {
        return this.favorites.some(el => el === id);
  }

  getFavorites(): Observable<Club[]> {
    return this.clubservice.getClubs()
      .map(clubs => clubs.filter(club => this.favorites.some(el => el === club.id)));
  }

  deleteFavorite(id: number): Observable<Club[]> {
    let index = this.favorites.indexOf(id);
    if (index >= 0) {
      this.favorites.splice(index,1);
      this.storage.set('favorites', this.favorites)
      return this.getFavorites();
    }
    else {
      console.log('Deleting non-existant favorite', id);
      return Observable.throw('Deleting non-existant favorite' + id);
    }


}
}
