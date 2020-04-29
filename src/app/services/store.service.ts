import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TescoGroceryService {

    baseUrl = 'https://dev.tescolabs.com';
    httpOptions: any;

    constructor(private httpClient: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Ocp-Apim-Subscription-Key': '99e60420104d421a91be0d63fe7ea32e'
            })
        };
    }

    searchForTescoItems(query: string): Promise<any> {
        const url = this.baseUrl + '/grocery/products?offset=0&limit=12&query=' + query;
        return new Promise<any>((resolve, reject) => {
            this.httpClient.get(url, this.httpOptions)
                .subscribe(response => {
                    resolve(response);
                }, (errorResponse: HttpErrorResponse) => {
                    reject(errorResponse.error.message);
                });
        });
    }

    getTescoItemDetails(tpnb: string): Promise<any> {
        const url = this.baseUrl + '/product?tpnb=' + tpnb;
        return new Promise<any>((resolve, reject) => {
            this.httpClient.get(url, this.httpOptions)
                .subscribe(response => {
                    resolve(response);
                }, (errorResponse: HttpErrorResponse) => {
                    reject(errorResponse.error.message);
                });
        });
    }

}
