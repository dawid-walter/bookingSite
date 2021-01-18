import {Component, OnInit} from '@angular/core';
import {PlacesService} from '../../service/places.service';
import {IonItemSliding, NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Place} from '../../model/place.model';

@Component({
    selector: 'app-offers',
    templateUrl: './offers.page.html',
    styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
    loadedOffers: Place[];

    constructor(private placesService: PlacesService, private router: Router) {
    }

    ngOnInit() {
        this.loadedOffers = this.placesService.places;
    }

    onCLickEdit(id: string, itemSliding: IonItemSliding) {
        console.log(id);
        itemSliding.close();
        this.router.navigateByUrl('/places/tabs/offers/' + id);
    }
}
