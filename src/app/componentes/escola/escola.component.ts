import { HeaderService } from './../../services/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.css']
})
export class EscolaComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Escola',
      icon: 'school',
      routeUrl: '/escola'
    }
  }

  ngOnInit(): void {
  }

  navigateToEscolaCreate(): void {
    this.router.navigate(['/escola/create']);
  }
}
