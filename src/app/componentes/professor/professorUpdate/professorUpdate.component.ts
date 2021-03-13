import { EscolaService } from './../../../services/escola.service';
import { ProfessorService } from './../../../services/professor.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Escola } from 'src/app/models/escola.model';
import { Professor } from 'src/app/models/professor.model';
import { User } from 'src/app/models/user.model';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'professorUpdate',
  templateUrl: './professorUpdate.component.html',
  styleUrls: ['./professorUpdate.component.css']
})
export class ProfessorUpdateComponent implements OnInit {

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
    private toastService: ToastService,
    private escolaService: EscolaService,
    private professorService: ProfessorService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.user = JSON.parse(sessionStorage.getItem('usuario'));

    this.professorService.readById(id, this.user.hash).subscribe(professor => {
      this.professor = professor;

      this.escolaAux = this.professor.escola;
      this.userAux = this.professor.usuario;
    });

    this.escolaService.read(this.user.hash).subscribe(escolas => {
      this.escolas = escolas;
    });
  }

  updateProfessor(): void {
    this.formsOk = this.validateFields();

    if(this.formsOk){
      this.professor.usuario = this.userAux;
      this.professor.escola = this.escolaAux;

      this.professorService.update(this.professor, this.user.hash).subscribe(() => {
        this.toastService.showMessage('Professor atualizado!', true);
        this.router.navigate(['/professor']);
      })
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
