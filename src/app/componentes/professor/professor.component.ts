import { EncryptService } from './../../services/encrypt.service';
import { ProfessorService } from './../../services/professor.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './../../models/user.model';
import { EscolaService } from './../../services/escola.service';
import { Escola } from './../../models/escola.model';
import { HeaderService } from './../../services/header.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Professor } from 'src/app/models/professor.model';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professores: Array<Professor> = [];
  escolas: Array<Escola> = [];
  user: User;
  escolaAux: Escola = {
    codigoMec: null,
    nome: '',
    email: '',
    telefone: ''
  };

  displayedColumns = ['nome', 'email', 'action'];
  dataSource: MatTableDataSource<Professor>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private router: Router,
    private escolaService: EscolaService,
    private professorService: ProfessorService,
    private headerService: HeaderService,
    private encryptService: EncryptService
  ) {
    headerService.headerData = {
      title: 'Professor',
      icon: 'badge',
      routeUrl: '/professor'
    }
  }

  ngOnInit(): void {
    const obj = sessionStorage.getItem('usuario');
    
    // this.user = JSON.parse(sessionStorage.getItem('usuario'));
    this.user = JSON.parse(JSON.stringify(this.encryptService.decrypt(obj)));
    this.escolaService.read(this.user.hash).subscribe(escolas => {
      this.escolas = escolas;
    });
  }

  buscarProfessores(): void {
    this.professorService.readByEscola(this.user.hash, this.escolaAux).subscribe(professores => {
      this.dataSource = new MatTableDataSource(professores);
      this.dataSource.paginator = this.paginator;
    });
  }

  navigateToProfessorCreate(): void {
    this.router.navigate(['/professor/create']);
  }
}
