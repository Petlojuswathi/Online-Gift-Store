import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { GiftService } from './gift.service';

export const authGuard: CanActivateFn = (route, state) => {

  let service = inject(GiftService);

  return service.getLoginStatus();
  //return true;  //modified the return value to false
};
