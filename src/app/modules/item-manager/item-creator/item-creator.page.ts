import { Component, OnInit } from '@angular/core';
import { ItemModel } from 'src/app/models/itemModel';
import { DataService, DataType } from 'src/app/services/datastore.service';
import { TescoGroceryService } from 'src/app/services/store.service';
import { AlertService } from 'src/app/util/alertService';
import { LoaderService } from 'src/app/util/loaderService';
import { TescoUtil } from 'src/app/util/tesco-util';
import { Util } from 'src/app/util/util';
import { IdGeneratorService } from 'src/app/services/idgen.service';

@Component({
  selector: 'app-item-creator',
  templateUrl: 'item-creator.page.html',
  styleUrls: ['item-creator.page.scss']
})
export class ItemCreatorComponent implements OnInit {

  // Tab fields
  step: string;

  // Data fields
  item: ItemModel;
  results: ItemModel[];

  constructor(
    private dataService: DataService,
    private tescoService: TescoGroceryService,
    private loadingService: LoaderService,
    private alertService: AlertService,
    private idGenerator: IdGeneratorService,
    private util: Util,
  ) { }

  ngOnInit(): void {
    this.step = 'HOME';
    this.results = null;
  }

  async searchForTescoItems(searchQuery: string) {
    await this.loadingService.presentLoader('Loading');
    try {
      this.results = TescoUtil.getResults(await this.tescoService.searchForTescoItems(searchQuery));
    } catch (err) {
      await this.alertService.presentErrorAlert('Tesco failed to return results!');
    } finally {
      await this.loadingService.dismissLoader();
    }
  }

  async selectTescoItem() {
    await this.loadingService.presentLoader('Loading');
    try {
      const response = await this.tescoService.getTescoItemDetails(this.item.reference);
      TescoUtil.fillItemNutritionDetails(this.item, TescoUtil.getItemNutritionDetails(response));
    } catch (error) {
      await this.alertService.presentErrorAlert('Tesco failed to return item details!');
    } finally {
      await this.loadingService.dismissLoader();
    }
  }

  async registerItem() {
    await this.loadingService.presentLoader('Loading');
    this.item.id = this.idGenerator.generateUniqueId();
    this.dataService.saveRecord(DataType.ITEM, this.item);
    await this.loadingService.dismissLoader();
  }

}
