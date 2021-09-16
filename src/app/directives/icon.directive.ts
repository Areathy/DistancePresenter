import { Directive, ElementRef, Input, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[icon]'
})
export class IconDirective
{
  @Input("iconname") iconname!: string;

  constructor(private elementRef: ElementRef, private renderer2 : Renderer2)
  {
  }

  iconElement: any;

  ngOnInit()
  {
    this.renderer2.setAttribute(this.elementRef.nativeElement, "class", "fa fa-" + this.iconname); //<i class="fa fa-iconname"> </i>
  }
}


