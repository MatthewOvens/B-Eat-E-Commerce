import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {RistorantiService} from '../../services/ristoranti.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  text:string = '';
  constructor(private router:Router, private serviceRistoranti: RistorantiService) { }
  
  ngOnInit(): void {
    // this.search.valueChanges.subscribe(value => this.searchEmitter.emit(value));
    this.serviceRistoranti.$getStringaSearch.subscribe(msj =>{  //chi si vuole suscrivere a me? metti in parametro
      this.text = msj;
    });
   
  }

  // search = new FormControl('');


  // @Output('search') searchEmitter = new EventEmitter<string>();

  searchFunction(text:string){
    this.serviceRistoranti.updateStringaSearch(text);
  }
}
