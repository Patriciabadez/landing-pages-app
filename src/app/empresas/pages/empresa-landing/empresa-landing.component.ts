import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from '../../models/models';
import { EmpresaService } from '../../../../empresa.service';

@Component({
  selector: 'app-empresa-landing',
  templateUrl: './empresa-landing.component.html',
  styleUrls: ['./empresa-landing.component.css']
})
export class EmpresaLandingComponent implements OnInit {

  empresa!: Empresa;

  constructor(
    private route: ActivatedRoute,
    private service: EmpresaService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => {
      this.empresa = this.service.buscar(p.get('slug')!);
    });
  }
}
