import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { SpinnerService } from './providers/spinner/spinner.service';

declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    public spinner: SpinnerService,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart){
        this.spinner.showSpinner();
      }
      if (event instanceof NavigationEnd) {
        this.spinner.hideSpinner();
      }
    });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
