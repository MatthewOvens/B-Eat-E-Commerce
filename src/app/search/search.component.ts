import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import food from '../files/food.json';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  constructor() { }
  foodList:{id:string, nome:string, tipo:string
          cucina:string, mediaValutazione:string
          numRecensioni:string, consegna:string
          indirizzo:string, img1:string, img2:string}[] = food;
  ngOnInit(): void {
    this.search.valueChanges.subscribe(value => this.searchEmitter.emit(value));
  }

  search = new FormControl('');


  @Output('search') searchEmitter = new EventEmitter<string>();
}
