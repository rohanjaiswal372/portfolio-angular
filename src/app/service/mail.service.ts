import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  private url ='http://localhost:8000/api/v1/send';

  sendMail(value){
    return this.http.post(this.url, value).toPromise().then(res => {
      console.log(res);
    });
  }
}
