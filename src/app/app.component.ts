import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { DataService } from './services/datastore.service';
import { LoaderService } from './util/loaderService';
import { ThemeService } from './util/themeService';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  firstLaunch: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private themeSwitcher: ThemeService,
    private dataService: DataService,
    private loaderService: LoaderService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    if (!this.dataService.getAttribute('theme')) {
      this.firstLaunch = true;
      // Set to false once user skips tour or completes it
    }

    this.platform.ready().then(() => {
      this.applyTheme();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async applyTheme() {
    await this.loaderService.presentLoader('Starting Application...');
    this.themeSwitcher.setTheme(await this.dataService.getAttribute('theme'));
    await this.loaderService.dismissLoader();
  }

}
