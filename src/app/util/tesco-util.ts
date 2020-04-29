import { Injectable } from '@angular/core';
import { ItemModel } from '../models/itemModel';

@Injectable()
export class TescoUtil {

  public static getResults(response: any): ItemModel[] {
    const responseResults = response.uk.ghs.products.results;
    if (responseResults.length > 0) {
      const items: ItemModel[] = [];
      const responseResults = response.uk.ghs.products.results;
      responseResults.forEach(async responseResult => {
        const item = this.formatTescoItem(responseResult);
        items.push(item);
      });
      return items;
    }
  }

  public static getItemNutritionDetails(response: any): any[] {
    const nutrition = response.products[0].calcNutrition;
    if (nutrition) {
      return response.products[0].calcNutrition.calcNutrients;
    }
  }

  private static formatTescoItem(tescoItem: any): ItemModel {
    const item: ItemModel = new ItemModel();
    item.imageLink = tescoItem.image.replace('http://', 'https://');
    item.name = tescoItem.name;
    item.cost = tescoItem.price;
    item.quantity = tescoItem.ContentsQuantity;
    item.quantityUnit = tescoItem.ContentsMeasureType;
    item.reference = tescoItem.tpnb;
    item.store = 'TESCO';

    switch (tescoItem.ContentsMeasureType) {
      case 'SNGL': item.quantityUnit = 'pieces'; break;
      case 'L': item.quantityUnit = 'litres'; break;
      case 'ML': item.quantityUnit = 'millilitres'; break;
      case 'G': item.quantityUnit = 'grams'; break;
      case 'KG': item.quantityUnit = 'kilograms'; break;
      default: item.quantityUnit = tescoItem.ContentsMeasureType;
    }

    return item;
  }

  public static fillItemNutritionDetails(item: ItemModel, nutrients: any[]): ItemModel {
    if (nutrients) {
      nutrients.forEach(nutrient => {
        const nutrientName: string = nutrient.name;
        const nutrientValue: number = nutrient.valuePer100;
        switch (nutrientName) {
          case 'Energy (kcal)':
            item.calories = nutrientValue;
            break;
          case 'Fat (g)':
            item.fat = nutrientValue;
            break;
          case 'Carbohydrate (g)':
            item.carbs = nutrientValue;
            break;
          case 'Fibre (g)':
            item.fibre = nutrientValue;
            break;
          case 'Protein (g)':
            item.protein = nutrientValue;
            break;
        }
      });
    }
    return item;
  }

}
