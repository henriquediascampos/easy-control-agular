import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnInit {

  body: HTMLElement
  currenTheme : string = "theme-white";
  constructor() {}

  ngOnInit(): void {

  }

  changeTheme(newTheme: string): void {
    const curretTheme = this.getCurrenteTheme();
    if (curretTheme !== newTheme) {
      this.body.classList.remove(this.currenTheme)
      this.body.classList.add(newTheme)
      this.currenTheme = newTheme;
    }
  }


  getCurrenteTheme(): string {
    this.body = document.querySelector('body');
    const clazz = this.body ? this.body.getAttribute("class")
      .split(" ")
      .filter(clazz => clazz.indexOf("theme-") > -1) : "";

    if (clazz) {
      this.currenTheme = clazz[0];
    }

    return this.currenTheme;
  }
}
