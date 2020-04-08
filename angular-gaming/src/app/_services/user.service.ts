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

    register(form, file) {
        var fd = new FormData();
        console.log(form);
        fd.append("username", form.value.username);
        fd.append("password", form.value.password);
        fd.append("firstname", form.value.firstname);
        fd.append("lastname", form.value.lastname);
        fd.append("file", file);
        return this.http.post<any>(`${environment.apiUrl}/user/register`, fd);
    }

    delete(id) {
        return this.http.delete(`${environment.apiUrl}/user/${id}`);
    }
}
