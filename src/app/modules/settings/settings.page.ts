import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/datastore.service';
import { ThemeService } from 'src/app/util/themeService';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsComponent implements OnInit {

  theme: string;

  constructor(
    private themeSwitcher: ThemeService,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.init();
  }

  async init() {
    this.theme = await this.dataService.getAttribute('theme');
  }

  switchTheme(theme: string) {
    this.themeSwitcher.setTheme(theme);
    this.dataService.setAttribute('theme', theme);
  }

}
