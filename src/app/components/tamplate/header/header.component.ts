import { ThemeService } from './../../../services/theme/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {


  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    // console.log(document.querySelector('body'));
  }

  changeTheme(theme: string): void {
    // console.log(this.themeService.getCurrenteTheme());
    this.themeService.changeTheme(theme);
  }
}
