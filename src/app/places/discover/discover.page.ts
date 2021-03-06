import {Component, OnInit} from '@angular/core';
import {PlacesService} from '../../service/places.service';
import {MenuController} from '@ionic/angular';
import {Place} from '../../model/place.model';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-discover',
    templateUrl: './discover.page.html',
    styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
    loadedPlaces: Place[];

    constructor(private placesService: PlacesService, private menuCtrl: MenuController, private http: HttpClient) {
    }

    ngOnInit() {
      this.loadedPlaces = this.placesService.places;
    }

    onOpenMenu() {
        this.menuCtrl.toggle();
    }

    ionViewWillEnter() {
        console.log('discover ionViewWillEnter');

    }

    ionViewDidEnter() {
        console.log('discover ionViewDidEnter');
    }

    ionViewWillLeave() {
        console.log('discover ionViewWillLeave');

    }

    ionViewDIdLeave() {
        console.log('discover ionViewDIdLeave');

    }


    segmentChanged($event: CustomEvent) {
        console.log($event.detail);

    }
}
