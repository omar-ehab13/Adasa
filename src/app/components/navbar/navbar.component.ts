import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isScrolled: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.isScrolled = window.scrollY > 80;
  }

  ngAfterViewInit() {
    this.isScrolled = window.scrollY > 80;
  }
}
