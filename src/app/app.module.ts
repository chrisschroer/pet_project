import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { EventsPage } from '../pages/events/events';
import { ContactPage } from '../pages/contact/contact';
import { MeasurealcPage } from '../pages/measurealc/measurealc';
import { ClubdetailPage } from '../pages/clubdetail/clubdetail';
import { ClubsPage } from '../pages/clubs/clubs';
import { FavoritesPage } from '../pages/favorites/favorites';
import { BuyticketsPage } from '../pages/buytickets/buytickets';
import { CommentPage } from '../pages/comment/comment';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LeaderProvider } from '../providers/leader/leader';
import { PromotionProvider } from '../providers/promotion/promotion';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { baseURL } from '../shared/baseurl';
import { ClubProvider } from '../providers/club/club';
import { EventProvider } from '../providers/event/event';
import { DjProvider } from '../providers/dj/dj';
import { FavoriteProvider } from '../providers/favorite/favorite';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    EventsPage,
    ContactPage,
    ClubdetailPage,
    MeasurealcPage,
    ClubsPage,
    FavoritesPage,
    BuyticketsPage,
    CommentPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    EventsPage,
    ContactPage,
    ClubdetailPage,
    MeasurealcPage,
    ClubsPage,
    FavoritesPage,
    BuyticketsPage,
    CommentPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LeaderProvider,
    PromotionProvider,
    ProcessHttpmsgProvider,
    { provide: 'BaseURL', useValue: baseURL},
    ClubProvider,
    EventProvider,
    DjProvider,
    FavoriteProvider,
    LocalNotifications,
    EmailComposer,
    SocialSharing,
    Camera
  ]
})
export class AppModule {}
