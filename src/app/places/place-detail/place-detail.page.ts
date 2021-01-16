import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Place} from '../../Model/place.model';
import {PlacesService} from '../../service/places.service';

@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.page.html',
    styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
    place: Place;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private placesService: PlacesService,
                private navCtrl: NavController) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('placeId')) {
                this.navCtrl.navigateBack('/places/tabs/discover');
            }
            const placeId = paramMap.get('placeId');
            this.place = this.placesService.getPlace(placeId);
        });
    }

    onClickRouter() {
        this.router.navigateByUrl('/places/tabs/discover');
    }

    onClickIonicNavControler() {
        this.navCtrl.navigateBack('/places/tabs/discover');
    }
}
