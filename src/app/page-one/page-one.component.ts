import { Component, OnInit } from '@angular/core';

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
    console.log(value);
    this.filter_value = value;
  }
}
