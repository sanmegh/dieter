import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export enum DataType {
    ITEM = "ITEM", MEAL = "MEAL", LOG = "LOG"
}

const ATTR = "ATTRIBUTE";

@Injectable()
export class DataService {

    constructor(public storage: Storage) {
        Object.keys(DataType).forEach(dataType => {
            this.storage.get(dataType).then(store => {
                if (!store) {
                    storage.set(dataType, []);
                }
            });
        });

        this.storage.get(ATTR).then(store => {
            if (!store) {
                const defaultAttr = { 'theme': 'green' };
                this.storage.set(ATTR, defaultAttr);
            }
        });
    }

    setAttribute(key: string, value: string) {
        this.storage.get(ATTR).then(store => {
            store[key] = value;
            this.storage.set(ATTR, store);
        });
    }

    getAttribute(key: string) {
        return this.storage.get(ATTR).then(store => store[key]);
    }

    getAllRecords(dataType: DataType) {
        return this.storage.get(dataType.toString());
    }

    searchByName(dataType: DataType, query: string) {
        return this.storage.get(dataType.toString()).then(store => {
            const result = [];
            store.forEach(dbRec => {
                if (dbRec.name.toLowerCase().includes(query.toLowerCase())) {
                    result.push(dbRec);
                }
            });
            return result;
        });
    }

    saveRecord(dataType: DataType, rec: any) {
        this.storage.get(dataType.toString()).then(store => {
            store.push(rec);
            this.storage.set(dataType.toString(), store);
        });
        this.storage.get(dataType.toString()).then(store => console.log(store));
    }

    updateRecord(dataType: DataType, rec: any) {
        this.storage.get(dataType.toString()).then(store => {
            store.forEach(entity => {
                if (entity.id === rec.id) {
                    store.splice(store.indexOf(entity), 1);
                }
            });
            store.push(rec);
            this.storage.set(dataType.toString(), store);
        });
        this.storage.get(dataType.toString()).then(store => console.log(store));
    }

    removeItem(dataType: DataType, item: any) {
        this.storage.get(dataType.toString()).then(store => {
            if (store) {
                var index = store.indexOf(item);
                store.splice(index, 1);
                return this.storage.set(dataType.toString(), store);
            }
        });
    }

}
