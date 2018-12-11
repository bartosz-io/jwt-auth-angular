import { Injectable } from '@angular/core';
import { config } from 'src/app/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {

  constructor(private http: HttpClient) {}

  public getRandomNumber() {
    return this.http.get<any>(`${config.apiUrl}/random`)
      .pipe(map(data => data.value));
  }
}
