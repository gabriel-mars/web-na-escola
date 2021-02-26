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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
