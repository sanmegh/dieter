import { Component } from '@angular/core';
import { ItemModel } from 'src/app/models/itemModel';
import { DataService, DataType } from 'src/app/services/datastore.service';
import { Util } from 'src/app/util/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-browser',
  templateUrl: 'item-browser.page.html',
  styleUrls: ['item-browser.page.scss']
})
export class ItemBrowserComponent {

  results: ItemModel[];

  constructor(
    private dataService: DataService,
    private router: Router,
    private util: Util
  ) { }

  async searchForRegisteredItems(event: any) {
    const searchQuery = event.srcElement.value;
    this.results = searchQuery ? await this.dataService.searchByName(DataType.ITEM, searchQuery) : await this.dataService.getAllRecords(DataType.ITEM);
  }

  viewItem(id: string) {
    this.router.navigate(['/items/' + id]);
  }

}
