import {Component, OnInit} from '@angular/core';
import {PlacesService} from '../../service/places.service';
import {Place} from '../../model/place.model';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-offers',
    templateUrl: './offers.page.html',
    styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
    loadedOffers: Place[];

    constructor(private placesService: PlacesService, private navCtrl: NavController) {
    }

    ngOnInit() {
        this.loadedOffers = this.placesService.places;
    }
}
