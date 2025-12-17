import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'empresas',
    loadChildren: () =>
      import('./empresas-routing.module').then(m => m.EmpresasRoutingModule)
  },
  { path: '', redirectTo: 'empresas', pathMatch: 'full' },
  { path: '**', redirectTo: 'empresas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
