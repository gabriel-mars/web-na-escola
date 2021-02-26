import { User } from '../../../models/user.model';
import { ProfessorService } from '../../../services/professor.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Professor } from '../../../models/professor.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'professorRead',
  templateUrl: './professorRead.component.html',
  styleUrls: ['./professorRead.component.css']
})
export class ProfessorReadComponent implements OnInit {

  displayedColumns = ['nome', 'email', 'telefone'];
  professores: Professor[];
  dataSource: MatTableDataSource<Professor>;
  resourcesLoaded = true;
  user: User;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private professorSevice: ProfessorService
  ) { }

  ngOnInit(): void {
    this.resourcesLoaded = false;
    this.user = JSON.parse(sessionStorage.getItem('usuario'));
  }

}
