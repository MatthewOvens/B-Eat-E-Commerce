import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  filter_value = '';
  constructor() { }
  
  ngOnInit(): void {
    this.search.valueChanges.subscribe(value => this.searchEmitter.emit(value));
  }

  search = new FormControl('');
handleSearch(value:string){
    console.log(value);
    this.filter_value = value;
  }

  @Output('search') searchEmitter = new EventEmitter<string>();
}
