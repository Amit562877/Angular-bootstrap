import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {

  constructor(private http:HttpClient) { }
  getData()
  {
    return this.http.get('http://localhost:8080/getUser');
  }

}
