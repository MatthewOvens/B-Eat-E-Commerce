import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }
    listaRistoranti: any[] = [
      {
        nome: "Mido Ristorante",
        tipo: "Orientale",
        cucina: "Arabo",
        mediaValutazione: "5.27",
        numRecensioni: "30",
        consegna: "1.90",
        indirizzo: "Via Pietro Custodi, 4, Milano, 20136",
        img1:"../../assets/risto2.jpg",
        img2:"../../assets/risto1.gif"
      },
      {
      nome: "Da Elvis",
      tipo: "Latam",
      cucina: "Peruviana",
      mediaValutazione: "6",
      numRecensioni: "500",
      consegna: "3",
      indirizzo: "Via Castoro, 10, Milano, 20136",
      img1:"../../assets/daElvis2.jpg",
      img2:"../../assets/daElvis1.gif"
    },
      

      {
      nome: "Sushi Moto",
      tipo: "Orientale",
      cucina: "Giapponese",
      mediaValutazione: "3",
      numRecensioni: "1",
      consegna: "1.90",
      indirizzo: "Piazzale Loreto, 23, Milano, 20136",
      img1:"../../assets/suhimoto2.jpg",
      img2:"../../assets/sushimoto.gif"
    },
    {
      nome: "Luca Vegan",
      tipo: "Vegano",
      cucina: "Vegana",
      mediaValutazione: "1",
      numRecensioni: "500000",
      consegna: "4.20",
      indirizzo: "Via Zubenesch, 24, Milano, 20136",
      img1:"../../assets/LucaVegan2.png",
      img2:"../../assets/LucaVegan1.png"
    },
    {
      nome: "Ba Nana",
      tipo: "Bit",
      cucina: "16bit",
      mediaValutazione: "5",
      numRecensioni: "90",
      consegna: "3.10",
      indirizzo: "Via Andrea Sansovino, 217, Milano, 20136",
      img1:"../../assets/banana2.png",
      img2:"../../assets/banana1.png"
    }
    ];
  ngOnInit(): void {
  }

}
