import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
    isLoading = false;
    isLogin = true;
    name = '';
    pass = '';

    constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController) {
    }

    ngOnInit() {
    }

//timeout - ograniczenie czasowe, symulowanie logowania uzytkownika
    onLogin() {
        this.isLoading = true;
        this.authService.login();
        this.loadingCtrl.create({keyboardClose: true, message: 'Login in...'}).then(loadingEl => {
            loadingEl.present();
            setTimeout(() => {
                this.isLoading = false;
                loadingEl.dismiss();
                this.router.navigateByUrl('/places');
            }, 500);
        });

    }

    onSwitch() {
        this.isLogin = !this.isLogin;
    }
    onSubmit(loginForm: NgForm) {
        if (!loginForm.valid) {
            return;
        }
        console.log(this.name);
        console.log(this.pass);
        this.name = '';
        this.pass = '';
        if (this.isLogin) {
            //send request for login
            this.onLogin();
        } else {
            //send request for sign in
        }
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
