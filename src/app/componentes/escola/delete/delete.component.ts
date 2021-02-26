import { User } from './../../../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from './../../../services/toast.service';
import { EscolaService } from './../../../services/escola.service';
import { Escola } from './../../../models/escola.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  escola: Escola;
  user: User;

  constructor(
    private toastService: ToastService,
    private router: Router, 
    private route: ActivatedRoute,
    private escolaService: EscolaService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.user = JSON.parse(sessionStorage.getItem('usuario'));

    this.escolaService.readById(id, this.user.hash).subscribe(escola => {
      this.escola = escola;
    })
  }

  deleteEscola(): void {
    this.escolaService.delete(this.escola.id, this.user.hash).subscribe(() => {
      this.toastService.showMessage('Escola removida!', true);
      this.router.navigate(['/escola']);
    })
  }

  cancel(): void{
    this.router.navigate(['/escola']);
  }
}
