import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RegisterService {
    constructor(private http: HttpClient) { }

    createUser(sendObj) {
        return this.http.post('http://192.168.1.28:3000/api/user', sendObj);
    }
}