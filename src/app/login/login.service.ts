import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  private token: string;

  constructor(private http: Http) {}

  login(credentials) {

    return new Promise(resolve => {

      if (credentials.email=='abcd@efg.hi' && credentials.password=='pass') {
        let data = { success: true, token: "abcdefghijklmnopqrstuvwxyz"};
        this.token = data.token;
        resolve(data);
      } else {
        this.token = '';
        resolve({ success: false, error: "Invalid User"});
      }

      /*
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      this.http.post('path/to/data.json', credentials, options)
        .map(res => res.json())
        .subscribe(data => {
          if (data.success) {
            this.token = data.token;
          } else {
            this.token = '';
          }
          resolve(data);
        });*/
    });
    
  }

  getToken() {
    return this.token;
  }
}
