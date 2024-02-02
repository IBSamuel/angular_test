import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const adminguardsGuard: CanActivateFn = (route, state) => {
  let routes = inject(Router)
  // let user = JSON.parse(localStorage['AdminDetails'])
  if(!(localStorage['adminDetails'])){
    routes.navigate(['/signin'])
  }
  return true;
};
