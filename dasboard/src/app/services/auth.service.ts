import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public estConnecte!: boolean;
  private api_url =
    'https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/';

  constructor(private http: HttpClient) {}

  login() {
    this.http
      .post(
        this.api_url + 'login',
        JSON.stringify({
          email: 'farid@hb.fr',
          password: 'coucou',
        })
      )
      .toPromise()
      .then(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err.status);
        }
      );
  }

  // getStats() {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Authorization: this.token,
  //     }),
  //   };
  //   this.http
  //     .get(this.api_url + 'stats/2001-01-01/2004-01-04', httpOptions)
  //     .toPromise()
  //     .then(
  //       (res) => {
  //         let donneesRecues = res as DonneesStatsServeur;

  //         this.recurrence = donneesRecues.recurrence;
  //       },
  //       (err) => {
  //         console.log(err.status);
  //       }
  //     );
  // }
}
