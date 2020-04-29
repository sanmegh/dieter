import { Component } from '@angular/core';
import { DataService } from 'src/app/services/datastore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-tour',
  templateUrl: 'init-tour.page.html',
  styleUrls: ['init-tour.page.scss']
})
export class InitTourPage {

  page = 1;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  skipTour() {
    this.dataService.setAttribute('TOUR', 'DONE');
    this.router.navigate(['/']);
  }

  continue() {
    if (this.page < 3) {
      this.page++;
      return;
    }
    this.dataService.setAttribute('TOUR', 'DONE');
    this.router.navigate(['/']);
  }

}
