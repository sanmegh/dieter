import { Injectable, Inject } from '@angular/core';
import { DomController } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class ThemeService {

    themes = [
        {
            name: 'green',
            styles: [
                { themeVariable: '--ion-color-main-background', value: '#ecf9ec' },
                { themeVariable: '--ion-color-main-dark', value: '#2a892a' },
                { themeVariable: '--ion-color-main-dark-contrast', value: '#d8f3d8' },
                { themeVariable: '--ion-color-main-light', value: '#b1e7b1' },
                { themeVariable: '--ion-color-main-light-contrast', value: '#123b12' },
            ]
        },
        {
            name: 'blue',
            styles: [
                { themeVariable: '--ion-color-main-background', value: '#ecf4ff' },
                { themeVariable: '--ion-color-main-dark', value: '#0f0099' },
                { themeVariable: '--ion-color-main-dark-contrast', value: '#d8f3d8' },
                { themeVariable: '--ion-color-main-light', value: '#0066f0' },
                { themeVariable: '--ion-color-main-light-contrast', value: '#0c0073' },
            ]
        }
    ]

    constructor(private domCtrl: DomController, @Inject(DOCUMENT) private document) { }

    setTheme(name: string): void {
        if (!name) {
            name = 'green';
        }
        let theme = this.themes.find(theme => theme.name === name);
        this.domCtrl.write(() => {
            theme.styles.forEach(style => {
                document.documentElement.style.setProperty(style.themeVariable, style.value);
            });
        });

    }

}
