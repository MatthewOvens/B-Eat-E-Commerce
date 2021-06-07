import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel-gallery',
  templateUrl: './carousel-gallery.component.html',
  styleUrls: ['./carousel-gallery.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselGalleryComponent implements OnInit {

  images = ['../../assets/food6.png', '../../assets/food7.png', '../../assets/food8.png', '../../assets/food9.png'
            , '../../assets/food10.jpg'];
  
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }


  ngOnInit(): void {
  }

}
