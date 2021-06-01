import { Component, OnInit } from '@angular/core';
import food from '../../files/food.json';
@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {
  
  filter_value = '';
  constructor() { }

  ngOnInit(): void {
  }

  handleSearch(value:string){
    
    this.filter_value = value;
  }

  foodList:{id:string, nome:string, tipo:string
  cucina:string, mediaValutazione:string
  numRecensioni:string, consegna:string
  indirizzo:string, img1:string, img2:string}[] = food;
}
