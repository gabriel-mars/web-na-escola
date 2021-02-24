import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EscolaComponent } from './escola/escola.component';
import { ProfessorComponent } from './professor/professor.component';
import { AlunoComponent } from './aluno/aluno.component';
import { ResponsavelComponent } from './responsavel/responsavel.component';
import { ComponenteCurricularComponent } from './componente-curricular/componente-curricular.component';
import { BoletimComponent } from './boletim/boletim.component';
import { ChamadaComponent } from './chamada/chamada.component';
import { ClasseComponent } from './classe/classe.component';
import { EventoComponent } from './evento/evento.component';
import { RequisicaoComponent } from './requisicao/requisicao.component';
import { AvisoComponent } from './aviso/aviso.component';
import { UserComponent } from './user/user.component';
import { CadastroEscolaComponent } from './views/cadastro-escola/cadastro-escola.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './views/header/header.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    EscolaComponent,
    ProfessorComponent,
    AlunoComponent,
    ResponsavelComponent,
    ComponenteCurricularComponent,
    BoletimComponent,
    ChamadaComponent,
    ClasseComponent,
    EventoComponent,
    RequisicaoComponent,
    AvisoComponent,
    UserComponent,
    CadastroEscolaComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatButtonModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
