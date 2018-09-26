import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TruckListService {
    constructor(private http: HttpClient) { }

    getTruckList() {
        return this.http.get('http://192.168.1.28:3000/api/trucks');
    }
}