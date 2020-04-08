import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from '@environments/environment';

const httpOptions = {   headers: new HttpHeaders({     'Content-type':"multipart/form-encoded"   }) }

@Injectable({ providedIn: 'root' })
export class UserService {
    optionsHeader = {'Content-type': 'multipart/form-data'}
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(`${environment.apiUrl}/user`);
    }

    register(user) {
        var fd = new FormData();
        var newuser = {
          
        }
        fd.append('user')
        return this.http.post<any>(`${environment.apiUrl}/user/register`, user, httpOptions);
    }

    delete(id) {
        return this.http.delete(`${environment.apiUrl}/user/${id}`);
    }
}
