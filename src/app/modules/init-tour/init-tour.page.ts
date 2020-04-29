import { Component } from '@angular/core';
import { DataService } from 'src/app/services/datastore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-tour',
  templateUrl: 'init-tour.page.html',
  styleUrls: ['init-tour.page.scss']
})
export class InitTourPage {

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  skipTour() {
    this.dataService.setAttribute('TOUR', 'DONE');
    this.router.navigate(['/']);
  }

  completeTour() {
    this.dataService.setAttribute('TOUR', 'NDONE');
    this.router.navigate(['/']);
  }

}
