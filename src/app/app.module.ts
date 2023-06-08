import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { FilaComponent } from './fila/fila.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { ListaBolsaComponent } from './lista-bolsa/lista-bolsa.component';
import { ListainscritosComponent } from './components/listainscritos/listainscritos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    NavbarComponent,
    MainContainerComponent,
    FilaComponent,
    MapaComponent,
    ListaBolsaComponent,
    ListainscritosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
