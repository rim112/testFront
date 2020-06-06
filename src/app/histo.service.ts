import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable()
export class histoService {
 
  constructor(private http: HttpClient) {
  }
  public getVoyages(){
    return this.http.get("https://blad-e.herokuapp.com/histo");
  }
  
  public deleteVoyagesfromhistobyId(id){
    return this.http.delete("https://blad-e.herokuapp.com/histo/delete/"+id);
  }
  
  public gethistoList(login: string) {
    let params = new HttpParams();
    params = params.append('mail', login);
    return this.http.get('https://blad-e.herokuapp.com/histosearch', { params: params });
  }}
