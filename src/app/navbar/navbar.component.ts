import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isFixedNavbar=false;

  @HostListener('window:scroll', [])
onWindowScroll() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  this.isFixedNavbar = scrollPosition > 50;
}

}
