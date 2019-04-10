import { Directive, Input, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  
  @Input('ratio') parallaxRatio : number = 1
  @Input('fade')  applyFade: boolean 
  initialTop : number = 0


  constructor(private eleRef : ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event :Object){
    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px';
    if(this.applyFade){
      this.eleRef.nativeElement.style.opacity =  1 - (window.scrollY/ 400);
    }
  }

}
