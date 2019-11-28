import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Guitar} from '../guitar.model';

@Injectable({
  providedIn: 'root'
})
export class GuitarServiceService {

  constructor(private http:HttpClient) { }

  GetGuitarInformation():Observable<any>{
    return this.http.get('http://localhost:4000/api/guitars');
  }

  AddGuitarInformation(brand:String,type:String,poster:String,price:String):Observable<any>{
    const guitar:Guitar = {brand:brand, type:type, poster:poster, price:price};
    return this.http.post('http://localhost:4000/api/guitars', guitar)
  }

  DeleteGuitar(id:String):Observable<any>{
    return this.http.delete('http://localhost:4000/api/guitars/'+id);
  }

  GetGuitar(id:String):Observable<any>{
    return this.http.get('http://localhost:4000/api/guitars/'+id);
  }

  UpdateGuitar(id:string,brand:String,type:string, poster:string, price:String):Observable<any>{
    const guitar:Guitar = {brand:brand, type:type, poster:poster, price:price};
    console.log("Edit"+id);
    return this.http.put('http://localhost:4000/api/guitars/'+id, guitar);
  }



}
