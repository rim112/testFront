import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiURL = 'https://blad-e.herokuapp.com/Voyages';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {


  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  public getVoyagesList() {
    return this.http.get('https://blad-e.herokuapp.com/Voyages');
  }

  public getVoyage(id: number): Observable<Voyage> {
    const url = 'https://blad-e.herokuapp.com/Voyages/' + id + '' ;
    return this.http.get<Voyage>(url, httpOptions).pipe(
      tap(_ => console.log('fetched voyages id=${id}')),
      catchError(this.handleError<Voyage>('getVoyage id=${id}'))
    );
  }

  public createVoyage(voyage: Object) {
    return this.http.post('https://blad-e.herokuapp.com/Voyages', voyage);
  }

  public updateVoyage(id: number, value: any) {
    return this.http.put('https://blad-e.herokuapp.com/Voyages' + id + '' , value);
  }

  public deleteVoyage(id: number) {
    return this.http.delete('https://blad-e.herokuapp.com/Voyages' + id + '' , { responseType: 'text' });
  }

}
