import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompFailure]',
  standalone: true
})
export class CompFailureDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('black');
  }

  private changeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
