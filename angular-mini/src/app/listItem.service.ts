import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ListItemService {

    constructor(private http: HttpClient) {}

    getListItems() {
        return this.http.get('https://demo9165932.mockable.io/products')
        
    }
}