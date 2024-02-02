import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const adminguardsGuard: CanActivateFn = (route, state) => {
  let routes = inject(Router)
  let user = localStorage['AdminDetails']
  if(!user){
    routes.navigate(['/signup'])
  }
  return true;
};
