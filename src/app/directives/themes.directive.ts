import { ThemeService } from './../services/theme/theme.service';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[colorTheme]'
})
export class ThemesDirective {
  colorPrimary: string;

  constructor(private el: ElementRef, private currentTheme: ThemeService) {
    // const typeColor = el.nativeElement.getAttribute("colortheme")
    // el.nativeElement.style.color = currentTheme.get(typeColor);
  }

  // testar hieraquia css

  // thema-white
  //   color-primary: #XXX

  // thema-dark
  //   color-primary: #YYY

}
