import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ModuloComponent } from './login/modulo/modulo.component';
import { LoginComponent } from './Modulos/login/login.component';
import { ModulosComponent } from './inicio/modulos/modulos.component';
import { InicioComponent } from './Modulos/inicio/inicio.component';
import { ArchivosComponent } from './Modulos/archivos/archivos.component';
import { UsuariosComponent } from './Modulos/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuloComponent,
    LoginComponent,
    ModulosComponent,
    InicioComponent,
    ArchivosComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
