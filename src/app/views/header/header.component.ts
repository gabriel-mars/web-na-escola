import { HeaderService } from './../../services/header.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('usuario'));
  }

  get title(): string {
    return this.headerService.headerData.title;
  }

  get icon(): string {
    return this.headerService.headerData.icon;
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl;
  }

  logout(): void {
    localStorage.clear();
    window.location.reload();
  }
}
