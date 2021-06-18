import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

 //qui creo un array di oggetti 
 arraycarni = [ {
   name : "Cangaroo meat",
  prezzo: "15$/kg",
   urlimg : "../../../assets/carnedicanguro.jpg"
 }, 
{
  name : "Cow meat",
  prezzo: "10$/kg",
  urlimg : "../../../assets/carnedimucca.jpg"
},
{
  name : "Horse meat",
  prezzo: "18$/kg",
  urlimg : "../../../assets/carnedicavallo.jpg"
}, 
{
  name : "Pig meat",
  prezzo: "9$/kg",
  urlimg : "../../../assets/carnedimaiale.jpg"
}, 
{
  name : "Boar meat",
  prezzo: "13$/kg",
  urlimg : "../../../assets/carnedicinghiale.jpg"
}, 
{
  name : " Hare meat",
  prezzo: "21$kg",
  urlimg : "../../../assets/carnedilepre.jpg"
}




] 

  constructor() { }

  ngOnInit(): void {
  }

}
