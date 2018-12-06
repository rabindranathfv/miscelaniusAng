import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTitleDecorator]'
})
export class TitleDecoratorDirective {

  @Input('appTitleDecorator') color: string;

  constructor( private elementRef: ElementRef) {
    console.log('directiva viva');
  }

  @HostListener('mouseenter') mouseEnter() {
    console.log(this.color);
    this.elementRef.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = null;
  }
}
