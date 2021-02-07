import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

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
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
