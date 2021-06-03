import { BEat } from './../../shared/BEat';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-viewer',
  templateUrl: './restaurant-viewer.component.html',
  styleUrls: ['./restaurant-viewer.component.scss']
})
export class RestaurantViewerComponent implements OnInit {

  restaurants = [];

  constructor() { 

    // this.restaurants = ;


  }

  ngOnInit(): void {
  }

}
