import { EncryptService } from './../../../services/encrypt.service';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { Escola } from './../../../models/escola.model';
import { EscolaService } from './../../../services/escola.service';
import { ToastService } from './../../../services/toast.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  escola: Escola = {
    codigoMec: null,
    nome: '',
    email: '',
    telefone: ''
  }

  user: User;
  formsOk: Boolean;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private router: Router,
    private toastService: ToastService,
    private escolaService: EscolaService,
    private encryptService: EncryptService
  ) { }

  ngOnInit(): void {
  }

  createEscola(): void {
    this.formsOk = this.validateFields();

    if(this.formsOk) {
      // this.user = JSON.parse(sessionStorage.getItem('usuario'));
      const obj = sessionStorage.getItem('usuario');
      this.user = JSON.parse(JSON.stringify(this.encryptService.decrypt(obj)));

      this.escolaService.cadastrarEscola(this.escola, this.user.hash).subscribe(() => {
        this.toastService.showMessage('Escola cadastrada!', true);
        this.router.navigate(['/escola']);
      });
    } else {
      this.toastService.showMessage('Preencha todos os campos.', false);
    }
  }

  // Valida se os campos do formulário estão vazios
  validateFields(): Boolean {
    if(this.escola.nome === null || this.escola.nome == null ||
      this.escola.email === '' || this.escola.email == null ||
      this.escola.telefone === '' || this.escola.telefone == null || this.escola.codigoMec == null) {
        return false;
    } else {
      return true;
    }
  }

  cancel(): void {
    this.router.navigate(['/escola']);
  }
}
