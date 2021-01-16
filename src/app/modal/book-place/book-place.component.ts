import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Place} from '../../model/place.model';

@Component({
  selector: 'app-book-place',
  templateUrl: './book-place.component.html',
  styleUrls: ['./book-place.component.scss'],
})
export class BookPlaceComponent implements OnInit {
  @Input() modalPlace: Place;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

    closeModal() {
        this.modalCtrl.dismiss(null, 'cancel');
    }

  onBooking() {
    this.modalCtrl.dismiss({message: 'You booked it'}, 'confirm');
  }
}
