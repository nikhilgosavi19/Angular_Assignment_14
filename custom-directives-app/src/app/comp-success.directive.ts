import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]',
  standalone: true
})
export class CompSuccessDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('black');
  }

  private changeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
