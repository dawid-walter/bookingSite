import {Component, Renderer2} from '@angular/core';

import {AlertController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {AuthService} from './service/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    darkMode: boolean;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private alertCtrl: AlertController,
        private router: Router,
        private authService: AuthService,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            this.checkDarkTheme();
        });
    }

    logOut() {
        this.alertCtrl.create({
            header: 'Are you sure',
            message: 'Do you want to log out?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Log out',
                    handler: () => {
                        this.authService.logout();
                        this.router.navigate(['/auth']);
                    }
                }
            ]
        }).then(alert => alert.present());
    }

    checkDarkTheme() {
        const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
        if (mediaQueryList.matches) {
            document.body.classList.toggle('dark');
        }
        this.darkMode = mediaQueryList.matches;
    }

    changeTheme() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark');
    }
}
