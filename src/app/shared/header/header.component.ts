import { Component } from '@angular/core';
import { navList } from './nav-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public navbarList = navList;

  public isMenuOpen: boolean = false;

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
