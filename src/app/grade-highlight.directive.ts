import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appGradeHighlight]'
})
export class GradeHighlightDirective implements OnChanges {
  @Input('appGradeHighlight') grade: number = 0;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    if (this.grade <= 39) {
      this.el.nativeElement.style.backgroundColor = 'red';
    } else if (this.grade <= 60) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    } else if (this.grade <= 80) {
      this.el.nativeElement.style.backgroundColor = 'lightblue';
    } else {
      this.el.nativeElement.style.backgroundColor = 'lightgreen';
    }
  }
}
