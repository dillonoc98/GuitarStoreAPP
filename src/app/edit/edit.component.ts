import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router, ActivatedRoute} from '@angular/router';
import {GuitarServiceService} from '../Services/services.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  guitar:any=[];
  constructor(private guitarService:GuitarServiceService, private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.guitarService.GetGuitar(this.route.snapshot.params['id']).subscribe(
      (data) =>{
          this.guitar = data;
          console.log(this.guitar);
      }
    );

  }
  // recheck later *** bellow.. brand might be _id
  onEditGuitar(form:NgForm){
    console.log(form.value._id);
    this.guitarService.UpdateGuitar(this.guitar._id, form.value.brand, form.value.type,
      form.value.poster, form.value.price).subscribe();
  }
}