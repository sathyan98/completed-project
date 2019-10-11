import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { sports } from './sports';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  car
  uri = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
  getCars()
  {
   
     return  this.http.get('http://localhost:3000/sports');
    
     
     
  }
  
    
  
  
  
}
