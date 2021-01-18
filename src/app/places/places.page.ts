import { Component, OnInit } from '@angular/core';
import {Place} from '../model/place.model';
import {HttpClient} from '@angular/common/http';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  constructor(private navCtrl: NavController, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get<Place[]>('http://localhost:8080/places').subscribe(response => console.log(response));
  }

  onClick() {
    this.router.navigateByUrl('/places/tabs/discover');
  }
}
