import { Component } from '@angular/core';
import { MealModel } from 'src/app/models/mealModel';
import { DataService, DataType } from 'src/app/services/datastore.service';
import { LoaderService } from 'src/app/util/loaderService';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-meal-browser',
  templateUrl: 'meal-browser.page.html',
  styleUrls: ['meal-browser.page.scss']
})
export class MealBrowserComponent {

  results: MealModel[];

  constructor(
    private dataService: DataService,
    private loadingService: LoaderService,
    private util: Util
  ) { }

  async searchForMeals(event: any) {
    const searchQuery = event.srcElement.value;
    this.results = searchQuery ? await this.dataService.searchByName(DataType.MEAL, searchQuery) : await this.dataService.getAllRecords(DataType.MEAL);
  }

}
