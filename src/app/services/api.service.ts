import { Injectable } from '@angular/core';
//HttpClient tarvitaan datan lähettämiseen palvelimelle ja sen hakemiseen palvelimelta
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CustomerModel } from '../customer.model';
import { map } from 'rxjs/operators';
import { catchError, tap } from 'rxjs/operators';

//määrittelee verkon yli kulkevan data JSON-muotoiseksi
const headers = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) {}

  // Virheenkäsittelymetodi joka palauttaa observablen
  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return error.message || error;
  }

  //metodit
  //POST: lisätään asiakas palvelimelle
  //'http://localhost:3000/posts'
  postCustomer(data: any) {
    return this.http.post<any>(this.baseUrl, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // GET: haku
  //'http://localhost:3000/posts'
  getCustomer(data: any) {
    return this.http.get<any>(this.baseUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // PUT: Päivitetään asiakkaan tiedot id:n perusteella
  //'http://localhost:3000/posts/' + id, data
  updateCustomer(data: any, id: number) {
    return this.http.put<any>('this.baseUrl/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // DELETE: Poistetaan asiakas id:n perusteella
  deleteCustomer(id: number) {
    return this.http.delete<any>('this.baseUrl/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
