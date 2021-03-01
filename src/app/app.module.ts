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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';

import { EscolaComponent } from './componentes/escola/escola.component';
import { ProfessorComponent } from './componentes/professor/professor.component';
import { AlunoComponent } from './componentes/aluno/aluno.component';
import { ResponsavelComponent } from './componentes/responsavel/responsavel.component';
import { ComponenteCurricularComponent } from './componentes/componente-curricular/componente-curricular.component';
import { BoletimComponent } from './componentes/boletim/boletim.component';
import { ChamadaComponent } from './componentes/chamada/chamada.component';
import { ClasseComponent } from './componentes/classe/classe.component';
import { EventoComponent } from './componentes/evento/evento.component';
import { RequisicaoComponent } from './componentes/requisicao/requisicao.component';
import { AvisoComponent } from './componentes/aviso/aviso.component';
import { UserComponent } from './componentes/user/user.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './views/header/header.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { HomeComponent } from './views/template/home/home.component';
import { ReadComponent } from './componentes/escola/read/read.component';
import { CreateComponent } from './componentes/escola/create/create.component';
import { UpdateComponent } from './componentes/escola/update/update.component';
import { DeleteComponent } from './componentes/escola/delete/delete.component';
import { ProfessorDeleteComponent } from './componentes/professor/professorDelete/professorDelete.component';
import { ProfessorUpdateComponent } from './componentes/professor/professorUpdate/professorUpdate.component';
import { ProfessorCreateComponent } from './componentes/professor/professorCreate/professorCreate.component';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

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
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ReadComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    ProfessorDeleteComponent,
    ProfessorUpdateComponent,
    ProfessorCreateComponent
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
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
