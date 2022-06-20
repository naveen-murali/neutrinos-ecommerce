/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import * as sd_LRkQE69DI7XAP8D9 from '../sd-services/AuthService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class AuthCanActivate {
  constructor(
    private sd_LRkQE69DI7XAP8D9: sd_LRkQE69DI7XAP8D9.AuthService,
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_AuthCanActivate

  async canActivate(navigationRoute, navigationRouteState) {
    try {
      var bh: any = this.sdService.__constructDefault({
        navigationRoute,
        navigationRouteState,
        local: { status: false },
      });
      bh = await this.authGuardCallSerivce(bh);
      //appendnew_next_canActivate
      return bh.local.status;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_K8T1t2yDRRIFqdBb');
    }
  }

  //appendnew_flow_AuthCanActivate_start

  async authGuardCallSerivce(bh) {
    try {
      let outputVariables = await this.sd_LRkQE69DI7XAP8D9.getUserDetails();
      bh.local.userDetails = outputVariables.local.userDetails;

      bh = await this.authGuardSwitch(bh);
      //appendnew_next_authGuardCallSerivce
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NGBSGkI8R8Lpseoo');
    }
  }

  async authGuardSwitch(bh) {
    try {
      if (
        this.sdService.operators['nnull'](
          bh.local.userDetails,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.authGuardTruthy(bh);
      } else if (
        this.sdService.operators['null'](
          bh.local.userDetails,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.authGuardFalse(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HAjzj0VQabZCjRa0');
    }
  }

  async authGuardTruthy(bh) {
    try {
      bh.local.status = true;
      //appendnew_next_authGuardTruthy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xncPTNNMNLYT1yx3');
    }
  }

  async authGuardFalse(bh) {
    try {
      bh.local.status = false;
      bh = await this.navigateToLogin(bh);
      //appendnew_next_authGuardFalse
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3g6Q9sq8cBmCdmEh');
    }
  }

  async navigateToLogin(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.router.navigate([
        this.sdService.formatPathWithParams(path, undefined),
      ]);
      //appendnew_next_navigateToLogin
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0AZlDEdrnPRuaXUk');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_AuthCanActivate_Catch
}
