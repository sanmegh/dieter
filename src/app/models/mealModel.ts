import { ItemModel } from './itemModel';

export class MealModel {

    id: string;
    name: string;
    image: any;

    recipe: string;
    ingredients: Array<IngredientModel> = [];
    numberOfMealsServed: number;

    cost: number = 0.0;
    quantity: number = 0.0;
    quantityUnit: string;

    calories: number = 0.0;
    carbs: number = 0.0;
    protein: number = 0.0;
    fat: number = 0.0;
    fibre: number = 0.0;

}

export class IngredientModel {

    item: ItemModel;
    quantity: number;

}
