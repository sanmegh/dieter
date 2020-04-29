import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealModel } from 'src/app/models/mealModel';
import { DataService, DataType } from 'src/app/services/datastore.service';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-meal-view',
  templateUrl: 'meal-view.page.html',
  styleUrls: ['meal-view.page.scss']
})
export class MealViewComponent {

  meal: MealModel = new MealModel();

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private util: Util
  ) {
    this.route.params.subscribe(params => {
      this.init(params['id']);
    });
  }

  async init(mealId: string) {
    const meals = await this.dataService.getAllRecords(DataType.MEAL);
    meals.forEach(meal => {
      if (meal.id === mealId) {
        this.meal = meal;
      }
    });
  }

}
