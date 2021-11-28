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
  postCustomer(data: any) {
    return this.http.post<any>('http://localhost:3000/posts', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  /*
  postCustomer(customer: any): Observable<CustomerModel> {
    return this.http
      .post<CustomerModel>(this.baseUrl, customer, headers)
      .pipe(catchError(this.handleError));
  }
*/
  // GET: haku
  getCustomer(data: any) {
    return this.http.get<any>('http://localhost:3000/posts').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  /*
  getCustomer(data: any): Observable<CustomerModel[]> {
    return this.http
      .get<CustomerModel[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }
  */
  // PUT: Päivitetään asiakkaan tiedot id:n perusteella
  updateCustomer(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/posts/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  /*
  updateCustomer(
    customer: any,
    id: number | string
  ): Observable<CustomerModel> {
    const url = `${this.baseUrl}/${customer._id}`;
    return this.http
      .put<CustomerModel>(url, customer, headers)
      .pipe(catchError(this.handleError));
  }
*/
  // DELETE: Poistetaan asiakas id:n perusteella
  deleteCustomer(id: number) {
    return this.http.delete<any>('http://localhost:3000/posts/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  /*
  deleteCustomer(id: string | number): Observable<CustomerModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http
      .delete<CustomerModel>(url, headers)
      .pipe(catchError(this.handleError));
  }
  */
}
