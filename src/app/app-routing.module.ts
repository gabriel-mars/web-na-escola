import { AlunoDeleteComponent } from './componentes/aluno/aluno-delete/aluno-delete.component';
import { AlunoUpdateComponent } from './componentes/aluno/aluno-update/aluno-update.component';
import { AlunoCreateComponent } from './componentes/aluno/aluno-create/aluno-create.component';
import { AlunoComponent } from './componentes/aluno/aluno.component';
import { ProfessorDeleteComponent } from './componentes/professor/professorDelete/professorDelete.component';
import { ProfessorUpdateComponent } from './componentes/professor/professorUpdate/professorUpdate.component';
import { ProfessorCreateComponent } from './componentes/professor/professorCreate/professorCreate.component';
import { ProfessorComponent } from './componentes/professor/professor.component';
import { DeleteComponent } from './componentes/escola/delete/delete.component';
import { UpdateComponent } from './componentes/escola/update/update.component';
import { CreateComponent } from './componentes/escola/create/create.component';
import { EscolaComponent } from './componentes/escola/escola.component';
import { HomeComponent } from './views/template/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "escola",
    component: EscolaComponent
  },
  {
    path: "escola/create",
    component: CreateComponent
  },
  {
    path: "escola/update/:id",
    component: UpdateComponent
  },
  {
    path: "escola/delete/:id",
    component: DeleteComponent
  },
  {
    path: "professor",
    component: ProfessorComponent
  },
  {
    path: "professor/create",
    component: ProfessorCreateComponent
  },
  {
    path: "professor/update/:id",
    component: ProfessorUpdateComponent
  },
  {
    path: "professor/delete/:id",
    component: ProfessorDeleteComponent
  },
  {
    path: "aluno",
    component: AlunoComponent
  },
  {
    path: "aluno/create",
    component: AlunoCreateComponent
  },
  {
    path: "aluno/update/:id",
    component: AlunoUpdateComponent
  },
  {
    path: "aluno/delete/:id",
    component: AlunoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
