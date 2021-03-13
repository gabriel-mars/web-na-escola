import { Professor } from './../../../models/professor.model';
import { FormControl, Validators } from '@angular/forms';
import { ProfessorService } from './../../../services/professor.service';
import { EscolaService } from './../../../services/escola.service';
import { ToastService } from './../../../services/toast.service';
import { Router } from '@angular/router';
import { Escola } from './../../../models/escola.model';
import { User } from './../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { TIPO_USUARIO } from 'src/app/enums/TIPO_USUARIO';

@Component({
  selector: 'professorCreate',
  templateUrl: './professorCreate.component.html',
  styleUrls: ['./professorCreate.component.css']
})
export class ProfessorCreateComponent implements OnInit {

  professor: Professor = {
    codigoGeradoEscola: '',
    escola: null,
    usuario: null
  }

  escolas: Array<Escola> = [];
  user: User;
  escola: Escola;

  userAux: User = {
    nome: '',
    email: '',
    cpf: '',
    tipoUsuario: null
  };

  escolaAux: Escola = {
    codigoMec: null,
    nome: '',
    email: '',
    telefone: ''
  };

  formsOk: Boolean;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private router: Router,
    private toastService: ToastService,
    private escolaService: EscolaService,
    private professorService: ProfessorService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('usuario'));
    this.escolaService.read(this.user.hash).subscribe(escolas => {
      this.escolas = escolas;
    });
  }

  createProfessor(): void {
    this.formsOk = this.validateFields();

    if(this.formsOk) {
      this.professor.usuario = this.userAux;
      this.professor.usuario.tipoUsuario = TIPO_USUARIO.PROFESSOR;
      this.professor.escola = this.escolaAux;

      this.user = JSON.parse(sessionStorage.getItem('usuario'));
      this.professorService.cadastrarProfessor(this.professor, this.user.hash).subscribe(() => {
        this.toastService.showMessage('Professor cadastrado!', true);
        this.router.navigate(['/professor']);
      });
    } else {
      this.toastService.showMessage('Preencha todos os campos.', false);
    }
  }

  validateFields(): Boolean {
    if(this.professor.usuario == null || this.professor.escola == null ||
      this.professor.usuario.nome == null || this.professor.usuario.nome === '' ||
      this.professor.usuario.email == null || this.professor.usuario.email === '' ||
      this.professor.usuario.cpf == null || this.professor.usuario.cpf === '') {
        return false;
    } else {
      return true;
    }
  }

  cancel(): void {
    this.router.navigate(['/professor']);
  }
}
