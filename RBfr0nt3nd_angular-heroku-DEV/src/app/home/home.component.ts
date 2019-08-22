import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../node_modules/animate.css/animate.css'],
  // providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  // sliderImages = document.querySelectorAll('.slide');
  // arrowRight = document.querySelector('#arrow-right');
  // arrowLeft = document.querySelector('#arrow-left');
  // current = 0;

  constructor() {
  }

  ngOnInit() {// must use Interface ('as NodeListOf<Element>', etc) in order to avoid error TS2339: Property
    // 'style' does not exist on type 'Element'.

    const sliderImages = (document.querySelectorAll('.slide') as NodeListOf<HTMLElement>);
    const arrowRightMobile = (document.querySelector('#arrow-right-mobile') as HTMLElement);
    const arrowLeftMobile = (document.querySelector('#arrow-left-mobile') as HTMLElement);
    const arrowRightTablet = (document.querySelector('#arrow-right-tablet') as HTMLElement);
    const arrowLeftTablet = (document.querySelector('#arrow-left-tablet') as HTMLElement);
    let current = 0;


    function reset() { // clears all images
      for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
      }
    }

    function startSlide() { // initializes slider
      reset();
      sliderImages[0].style.display = 'block';
      console.log('startSlide() is supposedly running')
    }

    // show prev
    function slideLeft() {
      reset();
      sliderImages[current - 1].style.display = 'block';
      current--;
    }

    // show next
    function slideRight() {
      reset();
      sliderImages[current + 1].style.display = 'block';
      current++;
    }

    // left arrow click mobile
    arrowLeftMobile.addEventListener('click', function () {
      if (current === 0) {
        current = sliderImages.length;
      }
      slideLeft();
    });

    // left arrow click tablet
    arrowLeftTablet.addEventListener('click', function () {
      if (current === 0) {
        current = sliderImages.length;
      }
      slideLeft();
    });

    // right arrow click mobile
    arrowRightMobile.addEventListener('click', function () {
      if (current === sliderImages.length - 1) {
        current = -1;
      }
      slideRight();
    });

    // right arrow click tablet
    arrowRightTablet.addEventListener('click', function () {
      if (current === sliderImages.length - 1) {
        current = -1;
      }
      slideRight();
    });


    startSlide();

  }

}
