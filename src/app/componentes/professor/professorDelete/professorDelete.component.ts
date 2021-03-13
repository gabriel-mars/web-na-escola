import { EncryptService } from './../../../services/encrypt.service';
import { ProfessorService } from './../../../services/professor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from './../../../services/toast.service';
import { User } from 'src/app/models/user.model';
import { Professor } from 'src/app/models/professor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'professorDelete',
  templateUrl: './professorDelete.component.html',
  styleUrls: ['./professorDelete.component.css']
})
export class ProfessorDeleteComponent implements OnInit {

  professor: Professor;
  user: User;

  constructor(
    private toastService: ToastService,
    private router: Router,
    private route: ActivatedRoute,
    private professorService: ProfessorService,
    private encryptService: EncryptService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // this.user = JSON.parse(sessionStorage.getItem('usuario'));
    const obj = sessionStorage.getItem('usuario');
    this.user = JSON.parse(JSON.stringify(this.encryptService.decrypt(obj)));

    this.professorService.readById(id, this.user.hash).subscribe(professor => {
      this.professor = professor;
    });
  }

  deleteProfessor(): void {
    this.professorService.delete(this.professor.id, this.user.hash).subscribe(() => {
      this.toastService.showMessage('Professor removido!', true);
      this.router.navigate(['/professor']);
    });
  }

  cancel(): void{
    this.router.navigate(['/professor']);
  }
}
