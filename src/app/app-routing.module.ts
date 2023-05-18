import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'homeAdmin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DataTablesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
