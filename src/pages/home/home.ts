import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { Club } from '../../shared/club';
import { ClubProvider } from '../../providers/club/club';
import { Event } from '../../shared/event';
import { EventProvider } from '../../providers/event/event';
import { Dj } from '../../shared/dj';
import { DjProvider } from '../../providers/dj/dj';
import { Promotion } from '../../shared/promotion';
import { PromotionProvider } from '../../providers/promotion/promotion';
import { Leader } from '../../shared/leader';
import { LeaderProvider } from '../../providers/leader/leader';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  club: Club;
  clubs: Club[];
  event: Event;
  events: Event[];
  dj:Dj;
  promotion: Promotion;
  leader: Leader;
  clubErrMess: string;
  clubsErrMess: string;
  eventErrMess: string;
  eventsErrMess: string;
  djErrMess: string;
  dishErrMess: string;
  promoErrMess: string;
  leaderErrMess: string;
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController,
    private clubservice: ClubProvider,
    private eventservice: EventProvider,
    private djservice: DjProvider,
    private promotionservice: PromotionProvider,
    private leaderservice: LeaderProvider,
    @Inject('BaseURL') private BaseURL) { }

    ngOnInit() {
      this.clubservice.getFeaturedClub()
        .subscribe(club => this.club = club,
        errmess => this.clubErrMess = <any>errmess );
      this.clubservice.getClubs()
        .subscribe(clubs => this.clubs = clubs,
        errmess => this.clubsErrMess = <any>errmess);
      this.eventservice.getFeaturedEvent()
        .subscribe(event => this.event = event,
        errmess => this.eventErrMess = <any>errmess );
      this.eventservice.getEvents()
        .subscribe(events => this.events = events,
        errmess => this.eventsErrMess = <any>errmess);
      this.djservice.getFeaturedDj()
        .subscribe(dj => this.dj = dj,
        errmess => this.djErrMess = <any>errmess );
      this.promotionservice.getFeaturedPromotion()
        .subscribe(promotion => this.promotion = promotion,
        errmess => this.promoErrMess = <any>errmess );
      this.leaderservice.getFeaturedLeader()
        .subscribe(leader => this.leader = leader,
        errmess => this.leaderErrMess = <any>errmess );

  }


  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
}
