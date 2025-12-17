import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaListComponent } from './empresas/pages/empresa-list/empresa-list.component';
import { EmpresaLandingComponent } from './empresas/pages/empresa-landing/empresa-landing.component';

const routes: Routes = [
  { path: '', component: EmpresaListComponent },
  { path: ':slug', component: EmpresaLandingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule {}
