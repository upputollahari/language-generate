import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LangService {

  constructor(private http:HttpClient) { }
getData(){
  return this.http.get('/assets/lang.json');
}
}