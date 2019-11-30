import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Guitar} from '../guitar.model';

@Injectable({
  providedIn: 'root'
})
export class GuitarServiceService {

  constructor(private http:HttpClient) { }
// gets all guitars
  GetGuitarInformation():Observable<any>{
    return this.http.get('http://localhost:4000/api/guitars');
  }
//Adds a guitar to db
  AddGuitarInformation(brand:String,type:String,poster:String,price:String):Observable<any>{
    const guitar:Guitar = {brand:brand, type:type, poster:poster, price:price};
    return this.http.post('http://localhost:4000/api/guitars', guitar)
  }
//removes guitar by id
  DeleteGuitar(id:String):Observable<any>{
    return this.http.delete('http://localhost:4000/api/guitars/'+id);
  }

//gets guitar by id
  GetGuitar(id:String):Observable<any>{
    console.log("Get Guitar");
    return this.http.get('http://localhost:4000/api/guitars/'+id);
  }
//updates guitar
  UpdateGuitar(id:String,brand:String, type:String, poster:String, price:String):Observable<any>{
    console.log("Dillon test");
    const guitar:Guitar = {brand:brand, type:type, poster:poster, price:price};
    console.log("Edit"+guitar);
    return this.http.put('http://localhost:4000/api/guitars/'+id, guitar);
    
  }
}