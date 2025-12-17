import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaListComponent } from './empresas/pages/empresa-list/empresa-list.component';
import { EmpresaLandingComponent } from './empresas/pages/empresa-landing/empresa-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaListComponent,
    EmpresaLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
