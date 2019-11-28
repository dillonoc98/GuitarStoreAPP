import { Component, OnInit } from '@angular/core';
import { GuitarServiceService } from '../Services/services.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-read',
  templateUrl: './read-guitars-component.component.html',
  styleUrls: ['./read-guitars-component.component.css']
})
export class ReadGuitarsComponentComponent implements OnInit {
  MyGuitars: any = [];
  constructor(private guitarService: GuitarServiceService) { }

  

  ngOnInit() {
    this.guitarService.GetGuitarInformation().subscribe((data) => {
      this.MyGuitars = data.guitars;
      console.log(this.MyGuitars);
    })
  }
  
  onDelete(id:String){
    console.log("Deleting Guitars with id: "+id);
    this.guitarService.DeleteGuitar(id).subscribe(
      ()=>{
        this.ngOnInit();
      }
    );
  }

}
