import { AlunoService } from './../../services/aluno.service';
import { EncryptService } from './../../services/encrypt.service';
import { HeaderService } from './../../services/header.service';
import { EscolaService } from './../../services/escola.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './../../models/user.model';
import { Aluno } from './../../models/aluno.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Escola } from 'src/app/models/escola.model';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: Array<Aluno> = [];
  escolas: Array<Escola> = [];
  user: User;
  escolaAux: Escola = {
    codigoMec: null,
    nome: '',
    email: '',
    telefone: ''
  };

  displayedColumns = ['nome', 'matricula', 'nomeMae', 'action'];
  dataSource: MatTableDataSource<Aluno>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private router: Router,
    private escolaService: EscolaService,
    private headerService: HeaderService,
    private encryptService: EncryptService,
    private alunoService: AlunoService
  ) {
    headerService.headerData = {
      title: 'Aluno',
      icon: 'face_retouching_natural',
      routeUrl: '/aluno'
    }
  }

  ngOnInit(): void {
    const obj = sessionStorage.getItem('usuario');
    
    this.user = JSON.parse(this.encryptService.decrypt(obj));
    this.escolaService.read(this.user.hash).subscribe(escolas => {
      this.escolas = escolas;
    });
  }

  buscarAlunos(): void {
    this.alunoService.readByEscola(this.user.hash, this.escolaAux).subscribe(alunos => {
      this.dataSource = new MatTableDataSource(alunos);
      this.dataSource.paginator = this.paginator;
    });
  }

  navigateToAlunoCreate(): void {
    this.router.navigate(['/aluno/create']);
  }
}
