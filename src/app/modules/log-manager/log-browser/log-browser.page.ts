import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LogModel } from 'src/app/models/logModel';
import { MealModel } from 'src/app/models/mealModel';
import { DataService, DataType } from 'src/app/services/datastore.service';
import { Util } from 'src/app/util/util';

@Component({
  selector: 'app-log-browser',
  templateUrl: 'log-browser.page.html',
  styleUrls: ['log-browser.page.scss'],
  providers: [DatePipe],
})
export class LogBrowserComponent implements OnInit {

  today: string;
  step = 'HOME';
  logs: LogModel[];
  log: LogModel = new LogModel();
  mealResults: MealModel[];

  constructor(
    private dataService: DataService,
    private datePipe: DatePipe,
    private util: Util,
  ) { }

  async ngOnInit() {
    this.today = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
    const results = await this.dataService.getAllRecords(DataType.LOG);
    results.sort(function (a: LogModel, b: LogModel) { return (b.id).localeCompare(a.id) });
    this.logs = results;
  }

  async startRecordingDay() {
    const log = new LogModel();
    log.id = this.today;
    this.logs.unshift(log);
    this.dataService.saveRecord(DataType.LOG, log);
  }

  async searchForMeals(event: any) {
    const searchQuery = event.srcElement.value;
    this.mealResults = await this.dataService.searchByName(DataType.MEAL, searchQuery);
  }

  async addMealToLog(meal: MealModel) {
    this.log.meals.push(meal);
    this.mealResults = null;
  }

  async saveLog() {
    this.dataService.updateRecord(DataType.LOG, this.log);
  }

}
