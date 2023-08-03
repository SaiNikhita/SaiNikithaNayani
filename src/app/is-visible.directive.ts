import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIsVisible]',
})
export class IsVisibleDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observedElement = this.el.nativeElement;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) this.updateNav();
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `-50%`,
      }
    );
    observer.observe(observedElement);
  }

  updateNav() {
    for (const child of this.el.nativeElement.parentElement.children) {
      document
        .querySelector(`a[fragment=${child.id}]`)
        ?.classList.remove('active');
    }
    document
      .querySelector(`a[fragment=${this.el.nativeElement.id}]`)
      ?.classList.add('active');
  }
}
