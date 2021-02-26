import { HeaderService } from './../../services/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Professor',
      icon: 'badge',
      routeUrl: '/professor'
    }
  }

  ngOnInit(): void {
  }

  navigateToProfessorCreate(): void {
    this.router.navigate(['/professor/create']);
  }
}
