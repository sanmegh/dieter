import { Injectable } from '@angular/core';
import { LogModel } from '../models/logModel';
import { ItemModel } from '../models/itemModel';
import { MealModel } from '../models/mealModel';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

@Injectable()
export class Util {

    public static prepareDateToTransmit(date: Date): string {
        return date.getFullYear() + '-' + String(date.getMonth()).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
    }

    public getLogSummary(log: LogModel): string {
        let calories = 0;
        let cost = 0;
        log.meals.forEach(meal => {
            meal.ingredients.forEach(ingredient => {
                calories += ingredient.item.calories * ingredient.quantity / ingredient.item.quantity;
                cost += ingredient.item.cost * ingredient.quantity / ingredient.item.quantity;
            });
        });
        return this.summarize(calories, cost);
    }

    public getMealSummary(meal: MealModel): string {
        let calories = 0;
        let cost = 0;
        meal.ingredients.forEach(ingredient => {
            calories += ingredient.item.calories * ingredient.quantity / ingredient.item.quantity;
            cost += ingredient.item.cost * ingredient.quantity / ingredient.item.quantity;
        });
        return this.summarize(calories, cost);
    }

    public getItemSummary(item: ItemModel) {
        let calories = item.calories ? Number(item.calories) : 0;
        let cost = item.cost ? Number(item.cost) : 0;
        return this.summarize(calories, cost);
    }

    public formatDate(dateStr: string): string {
        const date = new Date(dateStr);
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

    private summarize(calories: number, cost: number): string {
        return calories.toFixed(2) + ' kcal | £ ' + cost.toFixed(2);
    }

}
