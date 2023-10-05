import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.backgroundColor='green';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor='black';
  }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }

}

// import{Directive, ElementRef, HostListener} from '@angular/core';

// @Directive({

// selector:'[appRedEl]',

// })

// export class RedElDirective{

// constructor (private eleRef: ElementRef){ }

// @HostListener ('mouseover') onMouseOver(){

// this.eleRef.nativeElement .style.color ='green';

// }

// @HostListener('mouseleave') onMouseLeave(){

// this.eleRef.nativeElement.style.color='black' ;

// }

// } 