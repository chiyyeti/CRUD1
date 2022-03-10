import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getData(){
   return this.http.get<any>(' https://ty-shop.herokuapp.com/api/products')
  }


  postData(id){
   
  return this.http.post("https://ty-shop.herokuapp.com/api/products",id)
  }

  update(id:any ,product:any){
    return this.http.put("https://ty-shop.herokuapp.com/api/products/{_id}",product)
  }

  delete(id){
    return this.http.delete(`https://ty-shop.herokuapp.com/api/products/${id}`)
  }

}
