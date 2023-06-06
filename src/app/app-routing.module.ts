import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AdminGuard } from './guards/admin.guard';
import { ListaBolsaComponent } from './lista-bolsa/lista-bolsa.component';
import { ListainscritosComponent } from './components/listainscritos/listainscritos.component';
import { ListaGuard } from './guards/lista.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'homeAdmin', component: AdminComponent  , canActivate: [AdminGuard]  },
  { path: 'homeLista', component: ListainscritosComponent  , canActivate: [ListaGuard]  },
  { path: 'lista-disponible', component: ListaBolsaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DataTablesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
