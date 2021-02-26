import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from './../../../services/toast.service';
import { EscolaService } from './../../../services/escola.service';
import { User } from './../../../models/user.model';
import { Escola } from './../../../models/escola.model';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

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
    private toastService: ToastService,
    private escolaService: EscolaService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.user = JSON.parse(sessionStorage.getItem('usuario'));
    
    this.escolaService.readById(id, this.user.hash).subscribe(escola => {
      this.escola = escola;
    })
  }

  updateEscola(): void {
    this.escolaService.update(this.escola, this.user.hash).subscribe(() => {
      this.toastService.showMessage('Escola atualizada!', true);
      this.router.navigate(['/escola']);
    });
  }

  cancel(): void {
    this.router.navigate(['/escola']);
  }
}
