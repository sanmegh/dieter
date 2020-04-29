import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemModel } from 'src/app/models/itemModel';
import { DataService, DataType } from 'src/app/services/datastore.service';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-item-view',
  templateUrl: 'item-view.page.html',
  styleUrls: ['item-view.page.scss']
})
export class ItemViewComponent {

  item: ItemModel = new ItemModel();

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private util: Util
  ) {
    this.route.params.subscribe(params => {
      this.init(params['id']);
    });
  }

  async init(itemId: string) {
    const items = await this.dataService.getAllRecords(DataType.ITEM);
    items.forEach(item => {
      if (item.id === itemId) {
        this.item = item;
      }
    });
  }

}
