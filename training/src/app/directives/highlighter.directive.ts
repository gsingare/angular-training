import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[highlighter]'
})

export class HighLighter {
    constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
}

@HostListener('mouseover', ['$event'])
public mouseOver(event) {
this.el.nativeElement.parentNode.style.backgroundColor = "blue";
}

@HostListener('mouseout', ['$event'])
public mouseOut(event) {
this.el.nativeElement.parentNode.style.backgroundColor = "green";
}
}