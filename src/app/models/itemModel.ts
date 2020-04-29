
export class ItemModel {

    id: string;
    name: string;

    source: string;
    store: string;
    imageLink: string;
    reference: string;

    cost: number = 0.0;
    quantity: number = 0.0;
    quantityUnit: string;

    calories: number = 0.0;
    carbs: number = 0.0;
    protein: number = 0.0;
    fat: number = 0.0;
    fibre: number = 0.0;

}
