import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RistorantiService } from 'src/app/services/ristoranti.service';

@Component({
  selector: 'app-search-bar-iniziale',
  templateUrl: './search-bar-iniziale.component.html',
  styleUrls: ['./search-bar-iniziale.component.scss']
})
export class SearchBarInizialeComponent implements OnInit {

  constructor(private router:Router, private serviceRistoranti: RistorantiService) { }

  ngOnInit(): void {
  }

  search = new FormControl('');

  updateString(){
    this.serviceRistoranti.updateStringaSearch(this.search.value);
  }
}
