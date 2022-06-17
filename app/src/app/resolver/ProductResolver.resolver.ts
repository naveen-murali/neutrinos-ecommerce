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
import * as sd_fcayquMyZ58eyZyP from '../sd-services/ProductService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class ProductResolver {
  constructor(
    private sd_fcayquMyZ58eyZyP: sd_fcayquMyZ58eyZyP.ProductService,
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

  //   service flows_ProductResolver

  async resolve(navigationRoute, navigationRouteState) {
    try {
      var bh: any = this.sdService.__constructDefault({
        navigationRoute,
        navigationRouteState,
        local: { products: [] },
      });
      bh = await this.resolveFromService(bh);
      //appendnew_next_resolve
      return { products: bh.local.products };
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qPRUQSNAw3naZDpW');
    }
  }

  //appendnew_flow_ProductResolver_start

  async resolveFromService(bh) {
    try {
      let outputVariables = await this.sd_fcayquMyZ58eyZyP.fetchProductsFlow();
      bh.local.products = outputVariables.local.products;

      //appendnew_next_resolveFromService
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PYL9hxwifVGq7Chl');
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
  //appendnew_flow_ProductResolver_Catch
}
