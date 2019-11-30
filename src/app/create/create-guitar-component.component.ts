import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { GuitarServiceService } from '../Services/services.service';


@Component({
  selector: 'app-create',
  templateUrl: './create-guitar-component.component.html',
  styleUrls: ['./create-guitar-component.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private guitarService: GuitarServiceService) { }

  ngOnInit() {
  }

  onAddGuitar(form: NgForm) {
    
    if(!form.valid)
    {
      return;
    }
//log for test
    console.log(form.value);
//add object guitar 
    this.guitarService.AddGuitarInformation(form.value.brand,
      form.value.type, form.value.poster, form.value.price).subscribe(
        ()=>{
          //do something after out operation has finished
        }
      );
    console.log(form.value);
    form.resetForm();
  }

}
