import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup,FormControl } from '@angular/forms';
import { AssignmentModule } from './assignment.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  public data:any
  
  
 
  public regForm= new FormGroup({
    id : new FormControl(''),
   productName : new FormControl(''),
   productPrice : new FormControl(''),
   productImageURL : new FormControl(''),
   productDescription : new FormControl(''),
  })

  public assignObj:AssignmentModule =new AssignmentModule();



  constructor(private serv:ServiceService,private router:Router) { }

  ngOnInit(): void {

    this.serv.getData().subscribe(res=>{
      console.log(res.products);
      this.data = res.products
      
      
      
    })
    console.log(this.assignObj);
    
   

 
  }



  post(){
    console.log(this.regForm.value);
    this.assignObj= this.regForm.value
    
    this.serv.postData(this.assignObj).subscribe((res)=>{
      alert('Data Posted Successful !!');
      console.log(res);
      
    })
    
  }
delete(id){
  console.log(id);
  
  this.serv.delete(id).subscribe(res=>{
    alert("Data Deleted !!")
    console.log(res);
    
  })
  
}

edit(_id){
this.router.navigate(['/update',_id]);
 
}


}


