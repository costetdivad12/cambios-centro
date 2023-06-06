import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaGuard implements CanActivate {

    constructor( private router : Router){

    }
  canActivate(){
    const sesion = parseInt( localStorage.getItem('sesionLista')) === 1 ? true : false ;

    if(sesion){      
      return true;
    }else{
      this.router.navigateByUrl('login');
      return false;
    }
  }
}
