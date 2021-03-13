import { EncryptService } from './../../../services/encrypt.service';
import { User } from './../../../models/user.model';
import { EscolaService } from './../../../services/escola.service';
import { Escola } from './../../../models/escola.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  user: User;

  displayedColumns = ['nome', 'codigoMec', 'action'];
  escolas: Escola[];
  dataSource: MatTableDataSource<Escola>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private escolaService: EscolaService,
    private encryptService: EncryptService
    ) { }

  ngOnInit(): void {
    // this.user = JSON.parse(sessionStorage.getItem('usuario'));
    const obj = sessionStorage.getItem('usuario');
    this.user = JSON.parse(this.encryptService.decrypt(obj));
    
    this.escolaService.read(this.user.hash).subscribe(escolas => {
      this.dataSource = new MatTableDataSource(escolas);
      this.dataSource.paginator = this.paginator;
    });
  }
}
