import { Component, OnInit } from '@angular/core';
import { ItemModel } from 'src/app/models/itemModel';
import { IngredientModel, MealModel } from 'src/app/models/mealModel';
import { DataService, DataType } from 'src/app/services/datastore.service';
import { IdGeneratorService } from 'src/app/services/idgen.service';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-meal-creator',
  templateUrl: 'meal-creator.page.html',
  styleUrls: ['meal-creator.page.scss']
})
export class MealCreatorComponent implements OnInit {

  // Tab fields
  step: string = 'HOME';

  // Data fields
  meal: MealModel;
  ingredient: IngredientModel = new IngredientModel();
  items: ItemModel[];

  constructor(
    private dataService: DataService,
    private idGenerator: IdGeneratorService,
    private util: Util
  ) { }

  ngOnInit(): void {
    this.step = 'HOME';
    this.meal = new MealModel();
    this.ingredient = new IngredientModel();
  }

  async searchForItems(event: any) {
    const searchQuery = event.srcElement.value;
    this.items = searchQuery ? await this.dataService.searchByName(DataType.ITEM, searchQuery) : await this.dataService.getAllRecords(DataType.ITEM);
  }

  async saveMeal() {
    this.meal.id = this.idGenerator.generateUniqueId();
    this.dataService.saveRecord(DataType.MEAL, this.meal);
  }

}
