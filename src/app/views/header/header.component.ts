import { EncryptService } from './../../services/encrypt.service';
import { HeaderService } from './../../services/header.service';
import { User } from './../../models/user.model';
import { AfterViewInit, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { delay, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  user: User;

  constructor(
    private headerService: HeaderService,
    private cd: ChangeDetectorRef,
    private encryptService: EncryptService
    ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    // this.user = JSON.parse(sessionStorage.getItem('usuario'));
    const obj = sessionStorage.getItem('usuario');
    this.user = JSON.parse(this.encryptService.decrypt(obj));
    this.cd.detectChanges();
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
    sessionStorage.clear();
    window.location.reload();
  }
}
