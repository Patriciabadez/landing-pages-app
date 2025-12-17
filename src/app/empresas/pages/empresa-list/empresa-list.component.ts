import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../models/models';
import { EmpresaService } from '../../../../empresa.service';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent implements OnInit {

  empresas: Empresa[] = [];

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.empresas = this.empresaService.listar();
  }
}
