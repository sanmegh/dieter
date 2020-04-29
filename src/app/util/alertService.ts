import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable()
export class AlertService {

    constructor(private alertController: AlertController) { }

    public async presentErrorAlert(msg: string) {
        const alert = await this.alertController.create({
            header: 'Error',
            subHeader: msg,
            buttons: ['OK']
        });

        await alert.present();
    }

}
