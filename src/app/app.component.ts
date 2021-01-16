import {Component} from '@angular/core';

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
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private alertCtrl: AlertController,
        private router: Router,
        private authService: AuthService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
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
}
