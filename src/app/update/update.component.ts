import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 id:any
 product:any
 selectedProduct:any
  constructor(private route:ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {
this.id=this.route.snapshot.params['i']
 console.log(this.id);
 this.http.get<any>(' https://ty-shop.herokuapp.com/api/products').subscribe(res=>{

 this.product=res.products;
 console.log(this.product);

 for(let d of this.product){
   if(this.id === d._id){
 this.selectedProduct=d;
 console.log(this.selectedProduct);
 
   }
 }
 
 })
 
  }

  update(data:any){
this.http.put<any>(` https://ty-shop.herokuapp.com/api/products/${this.selectedProduct._id}`,data).subscribe(res=>{
  console.log(res);
  
})

  }

}
