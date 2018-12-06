import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// import ElementRef for get data of a element who have the directive
// import HostLiestener for trigger events for the specific tag
// import Input for enter data
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
    // using optional value or this.color if not get by default 'yellow'
    this.specificColor( this.color || 'yellow');
  }

  @HostListener('mouseleave') mouseLeave() {
    console.log('salio el mouse');
    this.specificColor( null );
  }

  private specificColor( color: string  ) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
