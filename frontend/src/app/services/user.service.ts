
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000/api';

    getRecords(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/data`);
    }

    getUsers(delayMs: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/users?delay=${delayMs}`);
    }
}
