import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionSheetController, ModalController, NavController} from '@ionic/angular';
import {PlacesService} from '../../service/places.service';
import {Place} from '../../model/place.model';
import {BookPlaceComponent} from '../../modal/book-place/book-place.component';

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
                private navCtrl: NavController,
                private modalCtrl: ModalController,
                private actionSheetCtrl: ActionSheetController) {
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

    async bookPlace() {
        this.actionSheetCtrl.create({
            header: 'Choose action',
            buttons: [
                {
                    text: 'Select Date',
                    handler: () => this.createModal('select')
                },
                {
                    text: 'Random Date',
                    handler: () => this.createModal('random')
                }
            ]
        }).then(actionEl => actionEl.present());
    }

    private createModal(mode: 'select' | 'random') {
        this.modalCtrl.create({
            component: BookPlaceComponent,
            cssClass: 'my-custom-class',
            animated: true,
            componentProps: {modalPlace: Place}
        }).then(modal => {
            modal.present();
            return modal.onDidDismiss();
        }).then(result => {
            console.log(result.data, result.role);
            if (result.role === 'confirm') {
                console.log('BOOKED!');
            }
        });
    }
}

