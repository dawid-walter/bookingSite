import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
    isLoading = false;

    constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController) {
    }

    ngOnInit() {
    }

    onLogin() {
        this.isLoading = true;
        this.authService.login();
        this.loadingCtrl.create({keyboardClose: true, message: 'Login in...'}).then(loadingEl => {
            loadingEl.present();
            setTimeout(() => {
                this.isLoading = false;
                loadingEl.dismiss();
                this.router.navigateByUrl('/places');    /!*timeout, symulowanie czasu potrzebnego do uzyskania informacji z serwera czy jest zalogowany*!/
            }, 500);
        });

    }

    /* kolko logowanieu wq przycisku
    onLogin() {
        this.isLoading = true;
        this.authService.login();
        setTimeout(() => {
            this.isLoading = false;
            this.router.navigateByUrl('/places');    /!*timeout, symulowanie czasu potrzebnego do uzyskania informacji z serwera czy jest zalogowany*!/
        }, 1500);
    }*/
}
