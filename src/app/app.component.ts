import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { DataService } from './services/datastore.service';
import { LoaderService } from './util/loaderService';
import { ThemeService } from './util/themeService';
import { Router } from '@angular/router';


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
    private loaderService: LoaderService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      if (this.initTour()) {
        return;
      }
      this.applyTheme();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async initTour() {
    const tour = await this.dataService.getAttribute('TOUR');
    if (tour != 'DONE') {
      this.router.navigate(['/init-tour']);
      return true;
    }
    return false;
  }

  async applyTheme() {
    this.themeSwitcher.setTheme(await this.dataService.getAttribute('theme'));
  }

}
