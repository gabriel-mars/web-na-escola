import { Responsavel } from './../../../models/responsavel.model';
import { TIPO_USUARIO } from 'src/app/enums/TIPO_USUARIO';
import { Router } from '@angular/router';
import { ToastService } from './../../../services/toast.service';
import { EscolaService } from './../../../services/escola.service';
import { EncryptService } from './../../../services/encrypt.service';
import { AlunoService } from './../../../services/aluno.service';
import { User } from './../../../models/user.model';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Escola } from 'src/app/models/escola.model';
import { Aluno } from 'src/app/models/aluno.model';

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent implements OnInit {

  aluno: Aluno = {
    matricula: '',
    nomeMae: '',
    escola: null,
    usuario: null,
    dataMatricula: new Date,
    dataNascimento: new Date,
    responsavel: null
  }

  responsavel: Responsavel = {
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

  userResponsavel: User = {
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

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  }

  constructor(
    private router: Router,
    private toastService: ToastService,
    private escolaService: EscolaService,
    private encryptService: EncryptService,
    private alunoService: AlunoService
  ) { }

  ngOnInit(): void {
    const obj = sessionStorage.getItem('usuario');
    this.user = JSON.parse(JSON.stringify(this.encryptService.decrypt(obj)));

    this.escolaService.read(this.user.hash).subscribe(escolas => {
      this.escolas = escolas;
    });
  }

  createAluno(): void {
    this.aluno.usuario = this.userAux;
    this.responsavel.usuario = this.userResponsavel;
    this.formsOk = this.validateFields();

    if(this.formsOk){
      this.aluno.usuario.tipoUsuario = TIPO_USUARIO.ALUNO;
      this.aluno.escola = this.escolaAux;

      this.responsavel.usuario.tipoUsuario = TIPO_USUARIO.RESPONSAVEL;
      this.aluno.responsavel = this.responsavel;

      this.alunoService.cadastrarAluno(this.aluno, this.user.hash).subscribe(() => {
        this.toastService.showMessage('Aluno cadastrado!', true);
        this.router.navigate(['/aluno']);
      })
    } else {
      this.toastService.showMessage('Preencha todos os campos.', false);
    }
  }

  validateFields(): Boolean {
    if(this.aluno.usuario == null || this.aluno.escola == null ||
      this.aluno.usuario.nome == null || this.aluno.usuario.nome === '' ||
      this.aluno.usuario.email == null || this.aluno.usuario.email === '' ||
      this.aluno.usuario.cpf == null || this.aluno.usuario.cpf === '' ||
      this.aluno.matricula == null || this.aluno.matricula === '' ||
      this.aluno.nomeMae == null || this.aluno.nomeMae === '' ||
      this.responsavel.usuario.nome == null || this.responsavel.usuario.nome === '' ||
      this.responsavel.usuario.email == null || this.responsavel.usuario.email === '' ||
      this.responsavel.usuario.cpf == null || this.responsavel.usuario.cpf === '') {
        return false;
    } else {
      return true;
    }
  }

  cancel(): void {
    this.router.navigate(['/professor']);
  }
}
