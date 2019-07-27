import { Component } from '@angular/core';

import { ThemeService } from './theme.service';

@Component({
  selector: 'nt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private themeService: ThemeService) {
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
